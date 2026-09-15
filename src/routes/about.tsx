import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Icon, type IconName } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { TrustedBy } from "@/components/sections/trusted-by";
import { about, coreExpertise, experience, industries, journey, stats, testimonials } from "@/data/content";
import { visualAssets } from "@/data/visual-assets";
import { derived } from "@/data/derived-assets";

const ctaBanner = derived.aboutCta;

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
          alt="Vedprakash working at a dual-monitor desk"
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

      <section className="container-page py-14">
        <SectionHeading title="My Journey" />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map((j) => (
            <li key={j.n} className="rounded-2xl border border-border bg-card p-5">
              <span className="font-display text-2xl font-extrabold text-primary">{j.n}</span>
              <h3 className="mt-2 font-display text-base font-bold">{j.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{j.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Roadmap Phase E — professional experience, previously missing entirely. Text-only, no fabricated dates/metrics or office imagery (see data/content.ts). */}
      <section className="container-page pb-14">
        <SectionHeading title="Professional Experience" />
        <div className="grid gap-4 sm:grid-cols-2">
          {experience.map((e) => (
            <article key={e.company} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  {e.logo ? (
                    <span className="flex h-12 items-center rounded-xl border border-black/5 bg-white px-3">
                      <img src={e.logo} alt={e.company} className="max-h-8 w-auto max-w-[130px] object-contain" />
                    </span>
                  ) : (
                    <h3 className="font-display text-lg font-bold">{e.company}</h3>
                  )}
                </div>
                <span className="rounded-full bg-primary-soft px-2.5 py-0.5 text-[11px] font-bold text-primary">
                  {e.industry}
                </span>
              </div>
              <p className="mt-1 text-sm font-semibold text-primary">{e.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{e.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-14">
        <SectionHeading title="Core Expertise" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {coreExpertise.map((c) => (
            <div
              key={c.title}
              className="flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-card px-3 py-5 text-center"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon name={c.icon as IconName} className="size-4.5" />
              </span>
              <span className="text-xs leading-tight font-bold">{c.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/*
        industries/cards/* are complete cards (photo + baked icon + label),
        natively 5:4. They were forced to 4:5 before, which cut the icons
        and the ends of "Social Campaigns" / "Medical Education".
      */}
      <section className="container-page pb-14">
        <SectionHeading title="Industries I Work With" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((ind) => (
            <img
              key={ind.label}
              src={visualAssets[ind.asset].url}
              alt={ind.label}
              loading="lazy"
              className="aspect-[5/4] w-full rounded-2xl object-cover shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1"
            />
          ))}
        </div>
      </section>

      <TrustedBy />

      <section className="container-page grid gap-4 py-14 sm:grid-cols-3">
        {about.values.map((v) => (
          <article key={v.title} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-bold">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
          </article>
        ))}
      </section>

      <section className="container-page pb-16">
        <SectionHeading
          title="What Clients Say"
          action={
            <Button asChild variant="outline" size="sm">
              <Link to="/testimonials">
                See all
                <Icon name="arrow" className="size-4" />
              </Link>
            </Button>
          }
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <article key={t.name} className="rounded-3xl border border-border bg-card p-6">
              <p className="text-sm leading-relaxed font-medium">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <img src={t.avatar} alt="" className="size-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-16">
        <a href="/contact" className="block overflow-hidden rounded-3xl">
          <img
            src={ctaBanner.url}
            width={ctaBanner.width}
            height={ctaBanner.height}
            alt="Let's create something extraordinary — go to contact"
            className="w-full object-cover"
          />
        </a>
      </section>
    </>
  );
}
