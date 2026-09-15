import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Icon, type IconName } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { cn } from "@/lib/utils";
import { projects } from "@/data/content";
import { visualAssets } from "@/data/visual-assets";

export const Route = createFileRoute("/projects/")({ component: ProjectsPage });

const CATEGORY_ICON: Record<string, IconName> = {
  Healthcare: "heart",
  "Real Estate": "monitor",
  "AI & Automation": "bot",
  Websites: "monitor",
  Social: "share",
};

function ProjectsPage() {
  const tags = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tags))).sort(),
    [],
  );
  const [filter, setFilter] = useState<string>("All");
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.tags.some((t) => t === filter));
  const featured = projects.find((p) => p.featured) ?? projects[0];

  return (
    <>
      <PageHero
        kicker="Work"
        title="Selected work."
        body="Real projects. Real results. AI, design and automation shipped end to end."
      />

      <section className="container-page py-14">
        <div className="mb-8 flex flex-wrap gap-2">
          {["All", ...tags].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setFilter(t)}
              aria-pressed={filter === t}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-bold transition-colors",
                filter === t
                  ? "border-primary bg-primary text-primary-fg"
                  : "border-border bg-card text-foreground hover:border-foreground/30",
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {filtered.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => {
              const art = p.image ? visualAssets[p.image] : undefined;
              return (
                <Link
                  key={p.slug}
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="group overflow-hidden rounded-3xl border border-border bg-card"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                    {art ? (
                      <img
                        src={art.url}
                        alt=""
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="grid size-full place-items-center bg-gradient-to-br from-primary/20 via-ink to-ink">
                        <Icon name={CATEGORY_ICON[p.tags[0]] ?? "cube"} className="size-10 text-white/20" />
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-primary-soft px-2.5 py-0.5 text-[11px] font-bold text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-display mt-3 flex items-center justify-between text-xl font-extrabold tracking-tight">
                      {p.title}
                      <Icon
                        name="arrow"
                        className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5"
                      />
                    </h2>
                    <p className="mt-1 text-sm text-muted">{p.blurb}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="py-10 text-center text-sm text-muted">No projects match “{filter}” yet.</p>
        )}
      </section>

      {featured ? (
        <section className="container-page pb-16">
          <div className="grid overflow-hidden rounded-3xl bg-ink text-ink-fg lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 sm:p-10">
              <p className="mb-3 flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-primary uppercase">
                <span className="inline-block h-0.5 w-4 rounded-full bg-primary" />
                Featured Case Study
              </p>
              <h2 className="font-display max-w-md text-2xl font-extrabold tracking-tight sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">{featured.blurb}</p>
              <Button asChild className="mt-6">
                <Link to="/projects/$slug" params={{ slug: featured.slug }}>
                  View Full Case Study
                  <Icon name="arrow" className="size-4" />
                </Link>
              </Button>
            </div>
            {featured.image ? (
              <img src={visualAssets[featured.image].url} alt="" className="min-h-[220px] w-full object-cover" />
            ) : (
              <div className="grid min-h-[220px] place-items-center bg-gradient-to-br from-primary/20 via-transparent to-transparent">
                <Icon name={CATEGORY_ICON[featured.tags[0]] ?? "cube"} className="size-14 text-white/15" />
              </div>
            )}
          </div>
          {featured.impact.length ? (
            <div className="mt-4 grid grid-cols-2 gap-4 rounded-3xl bg-ink px-6 py-6 text-ink-fg sm:grid-cols-4 sm:px-10">
              {featured.impact.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="font-display text-2xl font-extrabold sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          ) : null}
        </section>
      ) : null}
    </>
  );
}
