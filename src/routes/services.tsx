import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Icon, type IconName } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { services } from "@/data/content";
import { visualAssets } from "@/data/visual-assets";

export const Route = createFileRoute("/services")({ component: ServicesPage });

/** Compact-grid slugs (roadmap Phase D — 9 services with real thumbnail art, +1 "More Possibilities"). */
const GRID_THUMBNAILS: Record<string, string> = {
  "website-development": "services/thumbnails/websites-uiux",
  "ai-cinematic-video": "services/thumbnails/cinematic-video",
  "generative-image-design": "services/thumbnails/generative-image-design",
  "bot-creation": "services/thumbnails/custom-ai-bots",
  "claude-ai": "services/thumbnails/claude-ai-automation",
  "workflow-automation": "services/thumbnails/workflow-automation",
  "api-integrations": "services/thumbnails/api-integrations",
  "3d-visualization": "services/thumbnails/3d-visualization",
  "social-media-campaigns": "services/thumbnails/social-media-campaigns",
};

const heroArt = visualAssets["services/hero-laptop-montage"];
const websitesFeature = visualAssets["services/feature-websites-uiux"];
const cinematicFeature = visualAssets["services/feature-cinematic-video"];
const ctaBanner = visualAssets["services/cta-banner"];
const moreThumb = visualAssets["services/thumbnails/more-possibilities"];

function ServicesPage() {
  const gridServices = services.filter((s) => s.slug in GRID_THUMBNAILS);

  return (
    <>
      <PageHero
        kicker="Services"
        title="What I build for brands."
        body="AI-powered creative solutions, automation systems, and digital experiences — scoped to the outcome, not a bloated stack."
      />

      <section className="container-page pt-10">
        <img
          src={heroArt.url}
          width={heroArt.width}
          height={heroArt.height}
          alt=""
          className="mx-auto w-full max-w-4xl"
        />
      </section>

      {/*
        Roadmap Phase D — compact 10-tile visual grid. services/thumbnails/*
        are pure photography (no baked text) so each gets a live caption;
        the "More Possibilities" tile is a complete baked card and is used
        as-is, same pattern established on Home.
      */}
      <section className="container-page py-14">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {gridServices.map((s) => {
            const art = visualAssets[GRID_THUMBNAILS[s.slug]];
            return (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={art.url}
                    alt=""
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3">
                    <span className="text-xs font-bold text-white">{s.title}</span>
                    <Icon name="arrow" className="size-3.5 text-white/70 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </a>
            );
          })}
          <a href="/contact" className="overflow-hidden rounded-2xl">
            <img src={moreThumb.url} alt="More possibilities ahead — go to contact" className="aspect-[4/5] w-full object-cover" />
          </a>
        </div>
      </section>

      {/*
        Featured Claude AI Automation — built entirely in live HTML/CSS, no
        image. services/featured-claude-ai reproduces Anthropic's real
        Claude logo and product UI in a fake mockup — not safe to publish
        (owner-confirmed: skip fabricated/trademarked imagery, text-only).
      */}
      <section id="claude-ai" className="scroll-mt-24 py-14">
        <div className="container-page">
          <div className="grid items-center gap-8 rounded-3xl bg-ink p-8 text-ink-fg sm:p-12 lg:grid-cols-[1fr_auto]">
            <div className="max-w-xl">
              <span className="grid size-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                <Icon name="spark" className="size-6" />
              </span>
              <p className="mt-5 flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-primary uppercase">
                <span className="inline-block h-0.5 w-4 rounded-full bg-primary" />
                Featured Service
              </p>
              <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Claude AI <span className="text-primary">Automation</span>
              </h2>
              <p className="mt-4 text-white/70">
                I design and implement Claude AI powered workflows that research, analyze, create and automate your
                business processes.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2">
                {["Research", "Analysis", "Create", "Automate", "Scale"].map((step) => (
                  <li key={step} className="flex items-center gap-2 text-sm text-white/80">
                    <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <Link to="/contact">
                Automate Your Workflow
                <Icon name="arrow" className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Two feature panels — complete banners (own heading/bullets/button baked in), used as-is. */}
      <section className="container-page grid gap-6 pb-14 sm:grid-cols-2">
        <a id="website-development" href="#website-development" className="scroll-mt-24 overflow-hidden rounded-3xl">
          <img
            src={websitesFeature.url}
            width={websitesFeature.width}
            height={websitesFeature.height}
            alt="Websites & UI/UX — digital experiences that perform"
            className="w-full object-cover"
          />
        </a>
        <a id="ai-cinematic-video" href="#ai-cinematic-video" className="scroll-mt-24 overflow-hidden rounded-3xl">
          <img
            src={cinematicFeature.url}
            width={cinematicFeature.width}
            height={cinematicFeature.height}
            alt="Cinematic AI Video — bring your ideas to life"
            className="w-full object-cover"
          />
        </a>
      </section>

      {/* Remaining services (no thumbnail asset, or excluded from the compact grid) — kept as anchor targets. */}
      <section className="container-page grid gap-5 pb-14">
        {services
          .filter((s) => !(s.slug in GRID_THUMBNAILS) && s.slug !== "claude-ai")
          .map((s) => (
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

      <section className="container-page pb-16">
        <a href="/contact" className="block overflow-hidden rounded-3xl">
          <img src={ctaBanner.url} width={ctaBanner.width} height={ctaBanner.height} alt="Let's build something extraordinary together — go to contact" className="w-full object-cover" />
        </a>
      </section>
    </>
  );
}
