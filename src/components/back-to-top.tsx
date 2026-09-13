import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      className="fixed right-5 bottom-5 z-40 grid size-11 place-items-center rounded-full bg-ink text-ink-fg shadow-lg transition-transform hover:scale-[1.04]"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <Icon name="up" className="size-4" />
    </button>
  );
}
