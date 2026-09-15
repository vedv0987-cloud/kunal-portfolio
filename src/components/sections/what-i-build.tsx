import { Link } from "@tanstack/react-router";
import { Icon, type IconName } from "@/components/icons";
import { whatIBuild } from "@/data/content";
import { visualAssets } from "@/data/visual-assets";

/**
 * Home "What I Build" — image-led cards inside one black band, matching the
 * reference strip (was faint 25%-opacity background washes). Art is shown
 * uncropped (object-contain) in a uniform 5:4 frame so the grid rows stay
 * aligned even though the source artwork ranges from 1.13 to 1.37.
 */
export function WhatIBuild() {
  return (
    <section className="py-10 sm:py-14">
      <div className="container-page">
        <div className="overflow-hidden rounded-[1.6rem] bg-ink p-5 text-ink-fg sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display flex items-center gap-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              <span className="inline-block h-1 w-5 rounded-full bg-primary" aria-hidden />
              What I Build
            </h2>
            <p className="text-sm text-white/60">From imagination to intelligent solutions</p>
          </div>

          <ul data-reveal data-reveal-group className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 xl:grid-cols-8">
            {whatIBuild.map((item) => {
              const art = "image" in item && item.image ? visualAssets[item.image] : undefined;
              return (
                <li key={item.title}>
                  <Link
                    to="/services"
                    data-tilt
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
                  >
                    <div className="relative aspect-[5/4] overflow-hidden bg-black">
                      {art ? (
                        <>
                          {/* Blurred copy fills the frame so the artwork itself is never cropped and never letterboxed with black bars. */}
                          <div
                            aria-hidden
                            className="absolute inset-0 scale-125 bg-cover bg-center opacity-70 blur-xl"
                            style={{ backgroundImage: `url("${art.url}")` }}
                          />
                          <img
                            src={art.url}
                            alt=""
                            loading="lazy"
                            className="relative size-full object-contain transition-transform duration-700 group-hover:scale-[1.06]"
                          />
                        </>
                      ) : (
                        <span className="grid size-full place-items-center text-primary">
                          <Icon name={item.icon as IconName} className="size-8" />
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-3">
                      <h3 className="font-display text-[13px] leading-snug font-bold">{item.title}</h3>
                      <p className="mt-1 text-[11px] leading-snug text-white/55">{item.subtitle}</p>
                      <span className="mt-3 grid size-7 place-items-center rounded-full border border-white/20 text-white/70 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                        <Icon name="arrow" className="size-3.5" />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
