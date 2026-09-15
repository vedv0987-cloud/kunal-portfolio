import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Icon, type IconName } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { services } from "@/data/content";
import { derived } from "@/data/derived-assets";
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

const heroArt = derived.servicesHero;
const websitesFeature = visualAssets["services/feature-websites-uiux"];
const cinematicFeature = visualAssets["services/feature-cinematic-video"];
const ctaBanner = derived.servicesCta;
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

      <section className="container-page pt-10 sm:pt-14">
        <img
          src={heroArt.url}
          width={heroArt.width}
          height={heroArt.height}
          alt="Laptop and floating screens showing AI, automation and real-estate work"
          className="mx-auto h-auto w-full max-w-5xl"
        />
      </section>

      {/*
        Compact 10-tile grid. Thumbnails are ~4:3 natively — tiles now use
        that shape (was 4:5, which cropped the "More Possibilities" card's
        text and the edges of several photos).
      */}
      <section className="container-page py-12 sm:py-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {gridServices.map((s) => {
            const art = visualAssets[GRID_THUMBNAILS[s.slug]];
            return (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-ink shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1"
              >
                <img
                  src={art.url}
                  alt=""
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-3.5">
                  <span className="font-display text-[13px] leading-tight font-bold text-white">{s.title}</span>
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border border-white/30 text-white transition-colors group-hover:border-primary group-hover:bg-primary">
                    <Icon name="arrow" className="size-3.5" />
                  </span>
                </div>
              </a>
            );
          })}
          <a
            href="/contact"
            className="block aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1"
          >
            <img src={moreThumb.url} alt="More possibilities ahead — go to contact" loading="lazy" className="size-full object-cover" />
          </a>
        </div>
      </section>

      {/* Featured Claude AI Automation — live HTML/CSS, not the generated banner that mocks up Claude's product UI. */}
      <section id="claude-ai" className="scroll-mt-24 pb-12 sm:pb-16">
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
              <ul className="mt-6 flex flex-wrap gap-2">
                {["Research", "Analysis", "Create", "Automate", "Scale"].map((step) => (
                  <li
                    key={step}
                    className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-semibold text-white/85"
                  >
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <Button asChild size="lg" className="shrink-0 justify-self-start lg:justify-self-end">
              <Link to="/contact">
                Automate Your Workflow
                <Icon name="arrow" className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Two feature panels — complete banners (own heading/bullets/button baked in), used as-is, uncropped. */}
      <section className="container-page grid gap-6 pb-12 sm:pb-16 lg:grid-cols-2">
        <a id="website-development" href="#website-development" className="scroll-mt-24 block overflow-hidden rounded-3xl border border-border">
          <img
            src={websitesFeature.url}
            width={websitesFeature.width}
            height={websitesFeature.height}
            alt="Websites & UI/UX — digital experiences that perform"
            loading="lazy"
            className="h-auto w-full"
          />
        </a>
        <a id="ai-cinematic-video" href="#ai-cinematic-video" className="scroll-mt-24 block overflow-hidden rounded-3xl border border-border">
          <img
            src={cinematicFeature.url}
            width={cinematicFeature.width}
            height={cinematicFeature.height}
            alt="Cinematic AI Video — bring your ideas to life"
            loading="lazy"
            className="h-auto w-full"
          />
        </a>
      </section>

      {/*
        Services without thumbnail art. Deliverables used to be tall empty
        boxes (grid rows stretched to the left column's height) — now a
        compact, top-aligned checklist.
      */}
      <section className="container-page grid gap-5 pb-12 sm:pb-16 lg:grid-cols-2">
        {services
          .filter((s) => !(s.slug in GRID_THUMBNAILS))
          .map((s) => (
            <article key={s.slug} id={s.slug} className="scroll-mt-24 flex flex-col rounded-3xl border border-border bg-card p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                  <Icon name={s.icon as IconName} className="size-5" />
                </span>
                <h2 className="font-display text-2xl font-extrabold tracking-tight">{s.title}</h2>
              </div>
              <p className="mt-4 text-muted">{s.body}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2 rounded-xl bg-surface px-3 py-2.5 text-sm font-semibold">
                    <Icon name="check" className="size-4 shrink-0 text-primary" />
                    {d}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 self-start">
                <Link to="/contact">
                  Start this
                  <Icon name="arrow" className="size-4" />
                </Link>
              </Button>
            </article>
          ))}
      </section>

      <section className="container-page pb-16">
        <a href="/contact" className="block overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-0.5">
          <img
            src={ctaBanner.url}
            width={ctaBanner.width}
            height={ctaBanner.height}
            alt="Let's build something extraordinary together — go to contact"
            loading="lazy"
            className="h-auto w-full"
          />
        </a>
      </section>
    </>
  );
}
