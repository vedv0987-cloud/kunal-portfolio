import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/content";

export function FeaturedProjects() {
  return (
    <section className="py-6 sm:py-10">
      <div className="container-page">
        <SectionHeading
          title="Featured Projects"
          action={
            <Button asChild variant="outline" size="sm">
              <Link to="/projects">
                View All Projects
                <Icon name="arrow" className="size-4" />
              </Link>
            </Button>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-2xl bg-ink text-ink-fg"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={p.image}
                  alt=""
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />
                <span className="absolute top-3 right-3 grid size-8 place-items-center rounded-lg bg-black/45 text-white backdrop-blur-sm">
                  <Icon name="external" className="size-3.5" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-display text-base font-bold tracking-tight">{p.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/15 bg-black/40 px-2.5 py-0.5 text-[11px] font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
