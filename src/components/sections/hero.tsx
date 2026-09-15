import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Icon, type IconName } from "@/components/icons";
import { heroRail, heroStats, highlightBar, site } from "@/data/content";
import { HeroMontage } from "@/components/sections/hero-montage";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-4 pb-10 sm:pt-8 lg:pt-10">
      <div className="container-page">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-4">
          <div className="rise-in max-w-xl">
            <p className="mb-5 flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-primary uppercase">
              <span className="inline-block h-0.5 w-4 rounded-full bg-primary" />
              {site.eyebrow}
            </p>
            <h1 className="font-display text-[2.55rem] font-extrabold tracking-tight sm:text-6xl lg:text-[4.15rem]">
              {site.headline}
              <span className="mt-1 block text-primary">{site.headlineAccent}</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-[17px]">
              {site.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Start a Project
                  <Icon name="arrow" className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">
                  <span className="grid size-7 place-items-center rounded-full bg-primary-soft text-primary">
                    <Icon name="play" className="size-3.5" />
                  </span>
                  View My Work
                </Link>
              </Button>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-4">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <dt className="text-[11px] leading-snug text-muted sm:text-xs">{s.label}</dt>
                  <dd className="mt-1 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative flex items-center justify-center gap-2">
            <p className="absolute -right-1 top-0 hidden -translate-y-full flex-col items-end gap-3 text-right text-[11px] font-bold tracking-[0.2em] text-muted uppercase 2xl:flex">
              <span className="max-w-[8ch] leading-relaxed">AI Creativity for a Brighter World</span>
              <span className="flex items-center gap-1.5 text-muted-2">
                Scroll
                <span aria-hidden>↓</span>
              </span>
            </p>
            <HeroMontage />

            <aside className="hidden w-[158px] shrink-0 rounded-2xl border border-border bg-card p-2 shadow-[var(--shadow)] 2xl:block">
              {heroRail.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 rounded-xl px-2 py-2 text-sm font-semibold"
                >
                  <span className="grid size-8 place-items-center rounded-lg bg-primary-soft text-primary">
                    <Icon name={item.icon as IconName} className="size-4" />
                  </span>
                  {item.label}
                </div>
              ))}
            </aside>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[1.6rem] bg-ink text-ink-fg">
          <ul className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {highlightBar.map((item) => (
              <li key={item.title} className="flex items-center gap-3 px-6 py-5">
                <span className="grid size-10 place-items-center rounded-xl bg-white/10 text-primary">
                  <Icon name={item.icon as IconName} className="size-5" />
                </span>
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-sm text-white/65">{item.subtitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
