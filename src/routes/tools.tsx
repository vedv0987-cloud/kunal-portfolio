import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AnimatedStat } from "@/components/animated-stat";
import { BrandLogo } from "@/components/brand-logo";
import { Icon } from "@/components/icons";
import { SplitWords } from "@/components/split-words";
import { Button } from "@/components/ui/button";
import { tools, type ToolItem } from "@/data/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "Tools — VEDPRAKASH" },
      { name: "description", content: "The AI, design, code and automation stack Vedprakash ships with." },
    ],
  }),
  component: ToolsPage,
});

const ALL = "All";
const allItems = tools.flatMap((g) => g.items);
const logoItems = allItems.filter((item) => item.logo);
const half = Math.ceil(logoItems.length / 2);

function ToolsPage() {
  const [active, setActive] = useState(ALL);
  const groups = active === ALL ? tools : tools.filter((g) => g.group === active);

  const choose = (tab: string) => {
    setActive(tab);
    // If the tab bar is stuck near the top, bring the start of the grid back into view.
    const grid = document.getElementById("tool-grid");
    if (grid && grid.getBoundingClientRect().top < 0) grid.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-surface/60">
        <div className="container-page grid items-end gap-10 py-12 sm:py-16 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="rise-in mb-3 flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-primary uppercase">
              <span className="inline-block h-0.5 w-4 rounded-full bg-primary" />
              The Stack
            </p>
            <h1 className="font-display max-w-2xl text-4xl font-extrabold tracking-tight sm:text-6xl">
              <SplitWords text="The tools behind" baseDelay={60} />{" "}
              <SplitWords text="every build." baseDelay={260} className="text-primary" />
            </h1>
            <p
              className="rise-in mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
              style={{ animationDelay: "380ms" }}
            >
              Frontier AI for thinking and creating, cinematic generators for visuals, and code + automation that
              turns it all into systems that run. Click any tool to visit its official site.
            </p>
          </div>
          <dl className="rise-in grid grid-cols-3 gap-3" style={{ animationDelay: "480ms" }}>
            {[
              { value: String(allItems.length), label: "Tools" },
              { value: String(tools.length), label: "Categories" },
              { value: "∞", label: "Possibilities" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-card p-4 text-center shadow-[var(--shadow-card)]">
                <dd className="font-display text-3xl font-extrabold tracking-tight">
                  <AnimatedStat value={stat.value} />
                </dd>
                <dt className="mt-1 text-xs font-semibold text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div
          aria-hidden
          className="space-y-3 pb-10"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          {[logoItems.slice(0, half), logoItems.slice(half)].map((row, r) => (
            <ul
              key={r}
              className={cn("marquee-track marquee-track--slow flex w-max gap-3", r === 1 && "marquee-track--reverse")}
            >
              {[...row, ...row].map((item, i) => (
                <li
                  key={`${item.name}-${i}`}
                  className="flex items-center gap-2.5 rounded-full border border-border bg-card py-1.5 pr-4 pl-1.5 shadow-[var(--shadow-card)]"
                >
                  <BrandLogo item={item} className="size-9 rounded-full" />
                  <span className="text-sm font-bold whitespace-nowrap">{item.name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      <ToolTabs active={active} onChange={choose} />

      <section role="tabpanel" aria-label={active === ALL ? "All tools" : active} id="tool-grid" className="container-page scroll-mt-40 space-y-16 py-12 sm:py-16">
        {groups.map((group) => (
          <div key={`${active}-${group.group}`}>
            <div data-reveal className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="font-display flex items-center gap-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                  <span className="inline-block h-1 w-5 rounded-full bg-primary" aria-hidden />
                  <SplitWords text={group.group} />
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">{group.blurb}</p>
              </div>
              <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-bold text-muted">
                {group.items.length} {group.items.length === 1 ? "tool" : "tools"}
              </span>
            </div>
            <ul data-reveal data-reveal-group className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {group.items.map((item) => (
                <li key={item.name}>
                  <ToolCard item={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="container-page pb-16">
        <div
          data-reveal
          className="relative flex flex-col items-start justify-between gap-5 overflow-hidden rounded-3xl bg-ink px-8 py-10 text-ink-fg sm:flex-row sm:items-center"
        >
          <div aria-hidden className="highlight-sweep pointer-events-none absolute inset-y-0 -left-1/3 w-1/3" />
          <div className="relative">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Need a custom tool?</h2>
            <p className="mt-1 text-sm text-white/70">If it doesn't exist, I build it — pick a pack and let's start.</p>
          </div>
          <Button asChild size="lg" className="relative">
            <Link to="/pricing">
              See Pricing
              <Icon name="arrow" className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function ToolTabs({ active, onChange }: { active: string; onChange: (tab: string) => void }) {
  const tabs = [ALL, ...tools.map((g) => g.group)];
  const counts: Record<string, number> = { [ALL]: allItems.length };
  for (const g of tools) counts[g.group] = g.items.length;

  const refs = useRef<Record<string, HTMLButtonElement | null>>({});
  const mounted = useRef(false);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);

  useEffect(() => {
    const measure = () => {
      const el = refs.current[active];
      if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
    };
    measure();
    if (mounted.current) refs.current[active]?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    mounted.current = true;
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  return (
    <div className="sticky top-16 z-30 border-b border-border bg-background/95 lg:top-[72px]">
      <div className="container-page">
        <div role="tablist" aria-label="Tool categories" className="no-scrollbar relative flex gap-1 overflow-x-auto py-3">
          {pill ? (
            <span
              aria-hidden
              className="absolute top-3 bottom-3 rounded-full bg-ink shadow-[0_8px_20px_-10px_rgb(10_10_10/0.6)] transition-[left,width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ left: pill.left, width: pill.width }}
            />
          ) : null}
          {tabs.map((tab) => {
            const selected = tab === active;
            return (
              <button
                key={tab}
                ref={(el) => {
                  refs.current[tab] = el;
                }}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="tool-grid"
                tabIndex={selected ? 0 : -1}
                onKeyDown={(event) => {
                  const index = tabs.indexOf(tab);
                  const next = event.key === "ArrowRight" ? (index + 1) % tabs.length
                    : event.key === "ArrowLeft" ? (index - 1 + tabs.length) % tabs.length
                    : event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : -1;
                  if (next < 0) return;
                  event.preventDefault();
                  onChange(tabs[next]);
                  refs.current[tabs[next]]?.focus();
                }}
                onClick={() => onChange(tab)}
                className={cn(
                  "relative z-10 flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-bold whitespace-nowrap transition-colors duration-300",
                  selected ? "text-ink-fg" : "text-muted hover:text-foreground",
                  !pill && selected && "bg-ink",
                )}
              >
                {tab}
                <span
                  className={cn(
                    "rounded-full px-1.5 text-[11px] tabular-nums transition-colors duration-300",
                    selected ? "bg-white/15 text-white" : "bg-surface text-muted",
                  )}
                >
                  {counts[tab]}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ToolCard({ item }: { item: ToolItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      data-tilt
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-card)] [--tilt-glow:rgb(225_29_46/0.09)] hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      <div className="flex items-start justify-between gap-3">
        <BrandLogo item={item} size="lg" className="transition-[scale] duration-500 group-hover:scale-110" />
        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border text-muted transition-[background-color,border-color,color,rotate] duration-300 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
          <Icon name="arrow" className="size-4 -rotate-45" />
        </span>
      </div>
      <p className="font-display mt-5 text-lg leading-tight font-bold">{item.name}</p>
      <p className="mt-1.5 flex-1 text-sm leading-snug text-muted">{item.detail}</p>
      <span className="mt-4 text-xs font-bold text-primary transition-[translate] duration-300 group-hover:translate-x-1">
        Visit site
        <span className="sr-only"> (opens in a new tab)</span>
      </span>
    </a>
  );
}
