import { useEffect } from "react";
import type Lenis from "lenis";

const MAGNET_STRENGTH = 0.3;
const MAGNET_MAX_PX = 12;
const TILT_X_DEG = 6;
const TILT_Y_DEG = 8;

let lenis: Lenis | undefined;

/** Stop/restart smooth scrolling — dialogs call this so the page behind them can't scroll. */
export function pauseSmoothScroll(paused: boolean) {
  if (paused) lenis?.stop();
  else lenis?.start();
}

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarsePointer = () => window.matchMedia("(pointer: coarse)").matches;

/**
 * Site-wide motion, mounted once in the root:
 * - Lenis smooth wheel scrolling (lazy-loaded; skipped on touch, where native scrolling is already smooth).
 * (Scroll reveals for `data-reveal` / `data-reveal-group` are pure CSS scroll-driven
 *  animations in styles.css — no JS touches server-rendered markup before hydration.)
 * - Magnetic hover for `data-magnetic` (optional value = strength) — also feeds
 *   --mag-px/--mag-py to the `.btn-fluid` fill.
 * - 3D tilt + cursor spotlight for `data-tilt` (optional value = strength).
 * Everything is skipped for reduced-motion users.
 */
export function MotionLayer() {
  useEffect(() => {
    if (reducedMotion() || coarsePointer()) return;
    let cancelled = false;
    import("lenis").then(({ default: LenisCtor }) => {
      if (cancelled) return;
      lenis = new LenisCtor({ autoRaf: true, lerp: 0.085, wheelMultiplier: 1, smoothWheel: true, anchors: true });
    });
    return () => {
      cancelled = true;
      lenis?.destroy();
      lenis = undefined;
    };
  }, []);

  useEffect(() => {
    if (reducedMotion() || coarsePointer()) return;
    let magnet: HTMLElement | null = null;
    let tilt: HTMLElement | null = null;
    let last: PointerEvent | null = null;
    let frame = 0;

    const releaseMagnet = (el: HTMLElement) => {
      el.style.setProperty("--mag-x", "0px");
      el.style.setProperty("--mag-y", "0px");
    };
    const releaseTilt = (el: HTMLElement) => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };

    const update = () => {
      frame = 0;
      if (!last) return;
      const target = last.target instanceof Element ? last.target : null;
      const nextMagnet = target?.closest<HTMLElement>("[data-magnetic]") ?? null;
      const nextTilt = target?.closest<HTMLElement>("[data-tilt]") ?? null;
      if (magnet && magnet !== nextMagnet) releaseMagnet(magnet);
      if (tilt && tilt !== nextTilt) releaseTilt(tilt);
      magnet = nextMagnet;
      tilt = nextTilt;

      if (magnet) {
        const r = magnet.getBoundingClientRect();
        const strength = Number(magnet.dataset.magnetic) || MAGNET_STRENGTH;
        const clamp = (v: number) => Math.max(-MAGNET_MAX_PX, Math.min(MAGNET_MAX_PX, v));
        magnet.style.setProperty("--mag-x", `${clamp((last.clientX - (r.left + r.width / 2)) * strength).toFixed(1)}px`);
        magnet.style.setProperty("--mag-y", `${clamp((last.clientY - (r.top + r.height / 2)) * strength).toFixed(1)}px`);
        magnet.style.setProperty("--mag-px", `${(((last.clientX - r.left) / r.width) * 100).toFixed(1)}%`);
        magnet.style.setProperty("--mag-py", `${(((last.clientY - r.top) / r.height) * 100).toFixed(1)}%`);
      }

      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const x = Math.min(1, Math.max(0, (last.clientX - r.left) / r.width));
        const y = Math.min(1, Math.max(0, (last.clientY - r.top) / r.height));
        const strength = Number(tilt.dataset.tilt) || 1;
        tilt.style.setProperty("--rx", `${((0.5 - y) * TILT_X_DEG * strength).toFixed(2)}deg`);
        tilt.style.setProperty("--ry", `${((x - 0.5) * TILT_Y_DEG * strength).toFixed(2)}deg`);
        tilt.style.setProperty("--sx", `${(x * 100).toFixed(1)}%`);
        tilt.style.setProperty("--sy", `${(y * 100).toFixed(1)}%`);
      }
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      last = e;
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onLeave = () => {
      if (magnet) releaseMagnet(magnet);
      if (tilt) releaseTilt(tilt);
      magnet = null;
      tilt = null;
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
