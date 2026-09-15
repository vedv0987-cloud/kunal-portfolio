import { createFileRoute, Link, useNavigate, useSearch } from "@tanstack/react-router";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Icon, type IconName } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { cn } from "@/lib/utils";
import { homeCategories, projects } from "@/data/content";
import { visualAssets } from "@/data/visual-assets";
import { derived } from "@/data/derived-assets";

export const Route = createFileRoute("/projects/")({ component: ProjectsPage });

const ctaBanner = derived.workCta;

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const CATEGORY_ICON: Record<string, IconName> = {
  Healthcare: "heart",
  "Real Estate": "monitor",
  "AI & Automation": "bot",
  Websites: "monitor",
  Social: "share",
};

function ProjectsPage() {
  // Home's category cards can point at a category with no projects yet (AI
  // Video), so those categories get a tab too instead of silently falling back to All.
  const tags = useMemo(
    () =>
      Array.from(
        new Set<string>([...projects.flatMap((p) => p.tags), ...homeCategories.map((c) => c.category)]),
      ).sort(),
    [],
  );
  const { category } = useSearch({ from: "/projects" });
  const navigate = useNavigate();
  const filter = category && tags.includes(category) ? category : "All";
  const setFilter = (next: string) =>
    navigate({
      to: "/projects",
      search: next === "All" ? {} : { category: next },
      replace: true,
      resetScroll: false,
    });
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
              data-magnetic=""
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-bold",
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
          <div key={filter} data-reveal data-reveal-group className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => {
              const art = p.image ? visualAssets[p.image] : undefined;
              const label = p.client === "Internal" ? p.tags[0] : p.client;
              return (
                <Link
                  key={p.slug}
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  data-tilt="0.7"
                  className="group overflow-hidden rounded-3xl border border-border bg-card [--tilt-glow:rgb(225_29_46/0.1)] hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                    {art ? (
                      <img
                        src={art.url}
                        alt=""
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      // Placeholder until the real project image is generated (see docs/image-prompts-*.md).
                      <div className="relative grid size-full place-items-center overflow-hidden bg-ink">
                        <div
                          aria-hidden
                          className="absolute inset-0 bg-[radial-gradient(70%_90%_at_15%_10%,rgb(225_29_46/0.38),transparent_60%),radial-gradient(60%_80%_at_95%_100%,rgb(255_122_69/0.2),transparent_65%)] transition-[scale] duration-700 group-hover:scale-110"
                        />
                        <div aria-hidden className="work-grid absolute inset-0 opacity-[0.07]" />
                        <span
                          aria-hidden
                          className="font-display relative text-[4.5rem] leading-none font-extrabold tracking-tighter text-white/[0.12] transition-[scale,color] duration-700 group-hover:scale-110 group-hover:text-white/25"
                        >
                          {initials(label)}
                        </span>
                        <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold text-white/85">
                          <Icon name={CATEGORY_ICON[p.tags[0]] ?? "cube"} className="size-3.5 text-primary" />
                          {label}
                        </span>
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

      <section className="container-page pb-16">
        <a href="/pricing" className="block overflow-hidden rounded-3xl">
          <img
            src={ctaBanner.url}
            width={ctaBanner.width}
            height={ctaBanner.height}
            alt="Let's create something extraordinary — see pricing"
            className="w-full object-cover"
          />
        </a>
      </section>
    </>
  );
}
