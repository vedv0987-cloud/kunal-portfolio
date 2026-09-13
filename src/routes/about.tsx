import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { about, stats } from "@/data/content";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="The person behind the bots."
        body="I design, build and ship AI systems that give people their time back."
      />
      <section className="container-page grid items-center gap-10 py-14 lg:grid-cols-2">
        <img
          src="/images/about-desk.jpg"
          alt="Kunal working at a dual-monitor desk"
          className="w-full rounded-3xl object-cover"
        />
        <div>
          <p className="mb-3 flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-primary uppercase">
            <span className="inline-block h-0.5 w-4 rounded-full bg-primary" />
            {about.kicker}
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {about.title}
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
            {about.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Button asChild size="lg" className="mt-8">
            <Link to="/contact">
              Work with me
              <Icon name="arrow" className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="border-y border-border bg-surface/70">
        <div className="container-page grid grid-cols-3 gap-4 py-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-extrabold sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs text-muted sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-4 py-14 sm:grid-cols-3">
        {about.values.map((v) => (
          <article key={v.title} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-bold">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
          </article>
        ))}
      </section>
    </>
  );
}
