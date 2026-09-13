import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { projects } from "@/data/content";

export const Route = createFileRoute("/projects")({ component: ProjectsPage });

function ProjectsPage() {
  return (
    <>
      <PageHero
        kicker="Projects"
        title="Selected work."
        body="A few systems shipped recently — bots, automations, and sites that actually get used."
      />
      <section className="container-page grid gap-6 py-14 sm:grid-cols-2">
        {projects.map((p) => (
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
                <Icon name="arrow" className="size-4 text-muted transition-transform group-hover:translate-x-0.5" />
              </h2>
              <p className="mt-1 text-sm text-muted">{p.blurb}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
