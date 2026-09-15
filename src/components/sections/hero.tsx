import { Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { AnimatedStat } from "@/components/animated-stat";
import { Button } from "@/components/ui/button";
import { Icon, type IconName } from "@/components/icons";
import { RotatingWords } from "@/components/rotating-words";
import { heroHeadline, heroRail, heroStats, highlightBar, site } from "@/data/content";
import { HeroMontage } from "@/components/sections/hero-montage";
import { cn } from "@/lib/utils";

const BG_ROWS = [
  { words: ["Design", "Automate", "Scale", "Cinematic AI"], className: "bg-marquee bg-type-outline" },
  { words: ["Claude AI", "Websites", "AI Bots", "Workflows"], className: "bg-marquee bg-marquee--reverse bg-type-fill" },
];

/** Oversized, slow-drifting type behind the hero — two rows moving in opposite directions. */
function HeroBackdropType() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 bottom-28 flex flex-col justify-center gap-1 overflow-hidden select-none sm:gap-3"
      style={{ maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)" }}
    >
      {BG_ROWS.map((row) => (
        <div key={row.words[0]} className="bg-wave">
          <div className={row.className}>
            {[0, 1].map((copy) => (
              <span
                key={copy}
                className="font-display flex shrink-0 items-center text-[clamp(4.5rem,12vw,10rem)] leading-[1.05] font-extrabold tracking-tight whitespace-nowrap uppercase"
              >
                {row.words.map((w) => (
                  <span key={w} className="flex items-center">
                    <span className="px-[0.35em]">{w}</span>
                    <span className="text-[0.35em]">✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-4 pb-10 sm:pt-8 lg:pt-10">
      <HeroBackdropType />
      <div className="container-page relative">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-4">
          <div className="rise-in max-w-xl">
            <p className="mb-5 flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-primary uppercase">
              <span className="inline-block h-0.5 w-4 rounded-full bg-primary" />
              {site.eyebrow}
            </p>
            <h1 className="font-display text-[2.55rem] font-extrabold tracking-tight sm:text-6xl lg:text-[4.15rem]">
              <span className="sr-only">{heroHeadline.map((line) => line[0]).join(" ")}</span>
              {heroHeadline.map((words, i) => (
                <span key={words[0]} aria-hidden className={cn("block", i > 0 && "mt-1", i === 2 && "text-primary")}>
                  <RotatingWords words={words} delay={i * 650} interval={3400} />
                </span>
              ))}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-[17px]">
              {site.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link to="/pricing">
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
                    <AnimatedStat value={s.value} />
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

        <div className="relative mt-8 overflow-hidden rounded-[1.6rem] bg-ink text-ink-fg">
          <div aria-hidden className="highlight-sweep pointer-events-none absolute inset-y-0 -left-1/3 w-1/3" />
          <ul className="relative grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {highlightBar.map((item, i) => (
              <li
                key={item.title}
                className="rise-in group flex items-center gap-3 px-6 py-5"
                style={{ animationDelay: `${450 + i * 120}ms` }}
              >
                <span
                  className="float-y grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-primary transition-[background-color,color,scale] duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white"
                  style={{ animationDelay: `${i * -1.1}s` }}
                >
                  <Icon name={item.icon as IconName} className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-bold transition-[translate] duration-300 group-hover:translate-x-1">{item.title}</p>
                  <p className="text-sm">
                    {item.subtitle.split(" ").map((word, j) => (
                      <span key={`${word}-${j}`}>
                        {j > 0 ? " " : null}
                        <span className="glint-word" style={{ "--gd": `${i * 0.65 + j * 0.35}s` } as CSSProperties}>
                          {word}
                        </span>
                      </span>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
