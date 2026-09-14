import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { site } from "@/data/content";
import { visualAssets } from "@/data/visual-assets";

const mark = visualAssets["shared/brand/mark"];

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <span className="grid size-9 place-items-center transition-transform duration-150 group-hover:scale-[0.96]">
        <img src={mark.url} alt="" width={36} height={36} className="size-8" />
      </span>
      <span className={cn("leading-none", compact && "hidden sm:block")}>
        <span className="block font-display text-[15px] font-extrabold tracking-[0.18em] uppercase">
          {site.name}
        </span>
        <span className="mt-1 block text-[9px] font-semibold tracking-[0.22em] text-muted uppercase">
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
