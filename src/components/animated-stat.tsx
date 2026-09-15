import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * A stat like "50+" that counts up from 0 when the page opens and again every
 * time it scrolls back into view. Non-numeric values ("∞") spin in instead.
 * Server render shows the final value, so the number is never missing.
 */
export function AnimatedStat({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = /^(\d+)(.*)$/.exec(value);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : "";
  const [current, setCurrent] = useState(target ?? 0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const run = () => {
      setCycle((c) => c + 1);
      if (target === null) return;
      cancelAnimationFrame(raf);
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / 1500);
        setCurrent(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) run();
    }, { threshold: 0.6 });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      <span className="sr-only">{value}</span>
      {target === null ? (
        <span key={cycle} aria-hidden className="stat-infinity">
          {value}
        </span>
      ) : (
        <span aria-hidden>
          {current}
          {suffix}
        </span>
      )}
    </span>
  );
}
