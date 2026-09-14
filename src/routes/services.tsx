import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Icon, type IconName } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { services } from "@/data/content";

export const Route = createFileRoute("/services")({ component: ServicesPage });

function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="What I can build for you."
        body="AI-powered creative solutions, automation systems, and digital experiences — scoped to the outcome, not a bloated stack."
      />

      <section className="container-page py-14">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="group flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-card px-3 py-5 text-center transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon name={s.icon as IconName} className="size-5" />
              </span>
              <span className="text-xs leading-tight font-bold">{s.title}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-5 pb-14">
        {services.map((s) => (
          <article
            key={s.slug}
            id={s.slug}
            className="scroll-mt-24 grid gap-6 rounded-3xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
              <div className="relative mb-5 aspect-video overflow-hidden rounded-2xl bg-ink">
                <img
                  src={s.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                <Icon name={s.icon as IconName} className="size-5" />
              </span>
              <h2 className="font-display mt-4 text-2xl font-extrabold tracking-tight">{s.title}</h2>
              <p className="mt-2 text-muted">{s.body}</p>
              <Button asChild className="mt-6">
                <Link to="/contact">
                  Start this
                  <Icon name="arrow" className="size-4" />
                </Link>
              </Button>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {s.deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-2 rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-semibold"
                >
                  <Icon name="check" className="mt-0.5 size-4 text-primary" />
                  {d}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="container-page pb-16">
        <div className="flex flex-col items-start justify-between gap-4 rounded-3xl bg-ink px-8 py-10 text-ink-fg sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-extrabold">More possibilities ahead.</h2>
            <p className="mt-1 text-sm text-white/70">Not on the list? Tell me what you need.</p>
          </div>
          <Button asChild size="lg">
            <Link to="/contact">
              Let's Talk
              <Icon name="arrow" className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
