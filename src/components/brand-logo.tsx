import {
  siClaude,
  siFreepik,
  siGoogle,
  siGooglegemini,
  siMake,
  siN8n,
  siPython,
  siReact,
  siZapier,
  type SimpleIcon,
} from "simple-icons";
import type { ToolItem } from "@/data/content";
import { cn } from "@/lib/utils";

// Named imports only — `import * as` would pull all ~3,000 icons into the bundle.
const ICONS: Record<string, SimpleIcon> = {
  claude: siClaude,
  freepik: siFreepik,
  google: siGoogle,
  googlegemini: siGooglegemini,
  make: siMake,
  n8n: siN8n,
  python: siPython,
  react: siReact,
  zapier: siZapier,
};

/** Official brand mark (simple-icons, CC0) in its brand color, or a plain monogram when the brand isn't in simple-icons. */
export function BrandLogo({ item, className }: { item: ToolItem; className?: string }) {
  const icon = item.logo ? ICONS[item.logo] : undefined;
  return (
    <span
      className={cn(
        "grid size-12 shrink-0 place-items-center rounded-xl border border-black/5 bg-white shadow-[0_1px_2px_rgb(0_0_0/0.06)]",
        className,
      )}
    >
      {icon ? (
        <svg role="img" aria-label={icon.title} viewBox="0 0 24 24" className="size-6" fill={`#${icon.hex}`}>
          <path d={icon.path} />
        </svg>
      ) : (
        <span
          aria-hidden
          className="font-display text-[13px] font-extrabold tracking-tight"
          style={{ color: item.color ?? "#0d0d0d" }}
        >
          {item.monogram}
        </span>
      )}
    </span>
  );
}
