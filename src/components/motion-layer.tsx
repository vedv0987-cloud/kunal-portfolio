import { useEffect } from "react";
import type Lenis from "lenis";

const MAGNET_STRENGTH = 0.3;
const MAGNET_MAX_PX = 12;

let lenis: Lenis | undefined;

/** Stop/restart smooth scrolling — dialogs call this so the page behind them can't scroll. */
export function pauseSmoothScroll(paused: boolean) {
  if (paused) lenis?.stop();
  else lenis?.start();
}

function prefersPlainMotion() {
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    window.matchMedia("(pointer: coarse)").matches
  );
}

/**
 * Site-wide motion, mounted once in the root:
 * - Lenis smooth scrolling (loaded lazily, so it never delays first paint).
 * - Magnetic hover for anything marked `data-magnetic` (optional value = strength):
 *   the element drifts toward the cursor and exposes the cursor position as
 *   --mag-px/--mag-py for the `.btn-fluid` fill.
 * Both are skipped for touch devices and reduced-motion users.
 */
export function MotionLayer() {
  useEffect(() => {
    if (prefersPlainMotion()) return;
    let cancelled = false;
    import("lenis").then(({ default: LenisCtor }) => {
      if (cancelled) return;
      lenis = new LenisCtor({ autoRaf: true, lerp: 0.12, anchors: true });
    });
    return () => {
      cancelled = true;
      lenis?.destroy();
      lenis = undefined;
    };
  }, []);

  useEffect(() => {
    if (prefersPlainMotion()) return;
    let active: HTMLElement | null = null;
    let last: PointerEvent | null = null;
    let frame = 0;

    const release = (el: HTMLElement) => {
      el.style.setProperty("--mag-x", "0px");
      el.style.setProperty("--mag-y", "0px");
    };

    const update = () => {
      frame = 0;
      if (!last) return;
      const target = (last.target instanceof Element
        ? last.target.closest("[data-magnetic]")
        : null) as HTMLElement | null;
      if (active && active !== target) release(active);
      active = target;
      if (!target) return;
      const r = target.getBoundingClientRect();
      const strength = Number(target.dataset.magnetic) || MAGNET_STRENGTH;
      const clamp = (v: number) => Math.max(-MAGNET_MAX_PX, Math.min(MAGNET_MAX_PX, v));
      target.style.setProperty("--mag-x", `${clamp((last.clientX - (r.left + r.width / 2)) * strength).toFixed(1)}px`);
      target.style.setProperty("--mag-y", `${clamp((last.clientY - (r.top + r.height / 2)) * strength).toFixed(1)}px`);
      target.style.setProperty("--mag-px", `${(((last.clientX - r.left) / r.width) * 100).toFixed(1)}%`);
      target.style.setProperty("--mag-py", `${(((last.clientY - r.top) / r.height) * 100).toFixed(1)}%`);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      last = e;
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onLeave = () => {
      if (active) release(active);
      active = null;
      last = null;
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return null;
}
