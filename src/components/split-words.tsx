import type { CSSProperties } from "react";

/**
 * A headline that rises in word by word. Inside a `data-reveal` block it waits
 * until scrolled into view; otherwise it plays on load. Screen readers get the
 * plain sentence.
 */
export function SplitWords({ text, className, baseDelay = 0 }: { text: string; className?: string; baseDelay?: number }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} aria-hidden>
          {i > 0 ? " " : null}
          <span className="split-word" style={{ "--i": i, "--base": `${baseDelay}ms` } as CSSProperties}>
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}
