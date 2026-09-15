import { createFileRoute } from "@tanstack/react-router";
import { AnimatedStat } from "@/components/animated-stat";
import { ContactForm } from "@/components/contact-form";
import { Icon, type IconName } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { site, socials, stats } from "@/data/content";
import { visualAssets } from "@/data/visual-assets";

export const Route = createFileRoute("/contact")({ component: ContactPage });

const heroArt = visualAssets["contact/hero-workspace"];

// Roadmap Phase G — contact/process/* are complete cards whose baked text
// matches collaborationProcess word-for-word (real, already-approved
// copy); used as-is instead of the live icon+text rendering.
const PROCESS_ASSETS = [
  "contact/process/discover",
  "contact/process/plan",
  "contact/process/create",
  "contact/process/deliver",
];

function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Let's Talk"
        title="Tell me what you want to build."
        body="Share the idea. I'll come back with a clear next step — scope, timeline, and how we'd ship it."
      />
      <section className="container-page pt-10">
        <img
          src={heroArt.url}
          width={heroArt.width}
          height={heroArt.height}
          alt=""
          className="mx-auto w-full max-w-4xl rounded-3xl"
        />
      </section>

      <section className="container-page py-14">
        <div className="mb-10 flex flex-wrap gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:border-primary"
            >
              <Icon name={s.icon as IconName} className="size-4" />
              {s.label}
            </a>
          ))}
          <span className="inline-flex items-center rounded-full bg-surface px-4 py-2 text-sm text-muted">
            {site.location}
          </span>
        </div>
        <ContactForm />
      </section>

      <section className="border-t border-border bg-ink py-12 text-ink-fg">
        <div className="container-page">
          <p className="mb-2 flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-primary uppercase">
            <span className="inline-block h-0.5 w-4 rounded-full bg-primary" />
            Global Collaboration
          </p>
          <h2 className="font-display max-w-md text-3xl font-extrabold tracking-tight">
            Working with clients everywhere.
          </h2>
          <p className="mt-2 max-w-md text-sm text-white/70">
            Different time zones. A shared vision. Let's create something extraordinary, together.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-extrabold sm:text-3xl">
                  <AnimatedStat value={s.value} />
                </p>
                <p className="mt-1 text-xs text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <SectionHeading title="Our Collaboration Process" />
        <ol data-reveal data-reveal-group className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_ASSETS.map((key) => (
            <li key={key} className="overflow-hidden rounded-2xl border border-border">
              <img src={visualAssets[key].url} alt="" className="w-full" />
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
