import { Link } from "@tanstack/react-router";
import { Icon, type IconName } from "@/components/icons";
import { whatIBuild } from "@/data/content";
import { visualAssets } from "@/data/visual-assets";

export function WhatIBuild() {
  return (
    <section className="py-6 sm:py-10">
      <div className="container-page">
        <div className="overflow-hidden rounded-[1.6rem] bg-ink text-ink-fg">
          <div className="flex items-center justify-between gap-4 px-6 pt-7 sm:px-8">
            <h2 className="font-display flex items-center gap-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              <span className="inline-block h-1 w-5 rounded-full bg-primary" aria-hidden />
              What I Build
            </h2>
            <p className="hidden text-sm text-white/60 sm:block">
              From imagination to intelligent solutions
            </p>
          </div>
          <ul className="mt-6 grid grid-cols-2 divide-white/10 sm:grid-cols-4 sm:divide-x">
            {whatIBuild.map((item) => (
              <li
                key={item.title}
                className="group relative overflow-hidden border-t border-white/10 px-5 py-6 transition-colors hover:bg-white/[0.04] sm:px-6"
              >
                {"image" in item && item.image && visualAssets[item.image] ? (
                  <>
                    <img
                      src={visualAssets[item.image].url}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover opacity-25 transition-opacity duration-300 group-hover:opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
                  </>
                ) : null}
                <span className="relative grid size-10 place-items-center rounded-xl bg-white/10 text-primary">
                  <Icon name={item.icon as IconName} className="size-5" />
                </span>
                <h3 className="relative mt-4 font-display text-[15px] font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="relative mt-1 text-xs text-white/55">{item.subtitle}</p>
                <Link
                  to="/services"
                  className="relative mt-4 grid size-7 place-items-center rounded-full border border-white/15 text-white/60 transition-colors group-hover:border-primary group-hover:text-primary"
                  aria-label={`Learn more about ${item.title}`}
                >
                  <Icon name="arrow" className="size-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
