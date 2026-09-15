import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Swaps through `words` in place with a 3D flip + blur. Every word sits in the
 * same grid cell, so the box is always as wide as the longest word and the
 * layout never shifts. Purely visual (aria-hidden) — callers provide the
 * accessible text.
 */
export function RotatingWords({
  words,
  interval = 3200,
  delay = 0,
  className,
  wordClassName,
}: {
  words: readonly string[];
  interval?: number;
  /** Offset before this instance starts cycling — stagger several on one headline. */
  delay?: number;
  className?: string;
  wordClassName?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer = 0;
    const start = window.setTimeout(() => {
      timer = window.setInterval(() => {
        if (!document.hidden) setIndex((i) => (i + 1) % words.length);
      }, interval);
    }, delay);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(timer);
    };
  }, [words.length, interval, delay]);

  const prev = (index - 1 + words.length) % words.length;

  return (
    <span aria-hidden className={cn("rotating-words", className)}>
      {words.map((word, i) => (
        <span
          key={word}
          className={cn("rotating-word", wordClassName)}
          data-state={i === index ? "in" : i === prev ? "out" : "idle"}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
