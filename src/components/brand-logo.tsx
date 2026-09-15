import {
  siAirtable,
  siBlender,
  siClaude,
  siCursor,
  siDavinciresolve,
  siElevenlabs,
  siFigma,
  siFreepik,
  siGithub,
  siGithubcopilot,
  siGoogle,
  siGooglegemini,
  siHuggingface,
  siLangchain,
  siMake,
  siN8n,
  siNextdotjs,
  siNotion,
  siPerplexity,
  siPython,
  siReact,
  siSuno,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siWebflow,
  siWhatsapp,
  siZapier,
  type SimpleIcon,
} from "simple-icons";
import type { ToolItem } from "@/data/content";
import { cn } from "@/lib/utils";

// Named imports only — `import * as` would pull all ~3,000 icons into the bundle.
const ICONS: Record<string, SimpleIcon> = {
  airtable: siAirtable,
  blender: siBlender,
  claude: siClaude,
  cursor: siCursor,
  davinciresolve: siDavinciresolve,
  elevenlabs: siElevenlabs,
  figma: siFigma,
  freepik: siFreepik,
  github: siGithub,
  githubcopilot: siGithubcopilot,
  google: siGoogle,
  googlegemini: siGooglegemini,
  huggingface: siHuggingface,
  langchain: siLangchain,
  make: siMake,
  n8n: siN8n,
  nextdotjs: siNextdotjs,
  notion: siNotion,
  perplexity: siPerplexity,
  python: siPython,
  react: siReact,
  suno: siSuno,
  supabase: siSupabase,
  tailwindcss: siTailwindcss,
  typescript: siTypescript,
  vercel: siVercel,
  webflow: siWebflow,
  whatsapp: siWhatsapp,
  zapier: siZapier,
};

/** Official brand mark (simple-icons, CC0) in its brand color, or a plain monogram when the brand isn't in simple-icons. */
export function BrandLogo({
  item,
  className,
  size = "md",
}: {
  item: ToolItem;
  className?: string;
  size?: "md" | "lg";
}) {
  const icon = item.logo ? ICONS[item.logo] : undefined;
  const lg = size === "lg";
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center border border-black/5 bg-white shadow-[0_1px_2px_rgb(0_0_0/0.06)]",
        lg ? "size-14 rounded-2xl" : "size-12 rounded-xl",
        className,
      )}
    >
      {icon ? (
        <svg role="img" aria-label={icon.title} viewBox="0 0 24 24" className={lg ? "size-7" : "size-6"} fill={`#${icon.hex}`}>
          <path d={icon.path} />
        </svg>
      ) : (
        <span
          aria-hidden
          className={cn("font-display font-extrabold tracking-tight", lg ? "text-[15px]" : "text-[13px]")}
          style={{ color: item.color ?? "#0d0d0d" }}
        >
          {item.monogram}
        </span>
      )}
    </span>
  );
}
