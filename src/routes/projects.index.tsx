import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { cn } from "@/lib/utils";
import { projects } from "@/data/content";

export const Route = createFileRoute("/projects/")({ component: ProjectsPage });

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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                <img
                  src={p.image}
                  alt=""
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
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
                    className="size-4 text-muted transition-transform group-hover:translate-x-0.5"
                  />
                </h2>
                <p className="mt-1 text-sm text-muted">{p.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
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
            <img src={featured.image} alt="" className="min-h-[220px] w-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 rounded-3xl bg-ink px-6 py-6 text-ink-fg sm:grid-cols-4 sm:px-10">
            {featured.impact.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="font-display text-2xl font-extrabold sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
