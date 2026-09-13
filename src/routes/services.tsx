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
        body="Websites, automations, bots and custom tools — scoped to the outcome, not a bloated stack."
      />
      <section className="container-page grid gap-5 py-14">
        {services.map((s) => (
          <article
            key={s.slug}
            id={s.slug}
            className="scroll-mt-24 grid gap-6 rounded-3xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
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
    </>
  );
}
