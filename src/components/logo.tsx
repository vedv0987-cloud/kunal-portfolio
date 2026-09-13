import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="Kunal home">
      <span className="grid size-9 place-items-center rounded-lg bg-foreground text-background transition-transform duration-150 group-hover:scale-[0.96]">
        <span className="font-display text-lg font-extrabold leading-none tracking-tight">K</span>
      </span>
      <span className={cn("leading-none", compact && "hidden sm:block")}>
        <span className="block font-display text-[15px] font-extrabold tracking-[0.18em]">
          KUNAL
        </span>
        <span className="mt-1 block text-[9px] font-semibold tracking-[0.22em] text-muted uppercase">
          Build · Automate · Grow
        </span>
      </span>
    </Link>
  );
}
