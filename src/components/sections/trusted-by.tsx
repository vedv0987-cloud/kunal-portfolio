import { clients } from "@/data/content";

type Client = (typeof clients)[number];

/**
 * Real client logos (public/images/clients/, trimmed + normalized) in full
 * color on uniform white tiles — many source files are JPEGs with white
 * backgrounds, so a consistent tile makes them read as intentional in both
 * themes. OncoSphere has no usable logo file yet and shows its name.
 */
function LogoTile({ c }: { c: Client }) {
  return (
    <div className="flex h-16 w-44 shrink-0 items-center justify-center rounded-2xl border border-black/5 bg-white px-5 shadow-[0_1px_2px_rgb(0_0_0/0.05)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-16px_rgb(0_0_0/0.35)]">
      {c.logo ? (
        <img src={c.logo} alt={c.name} loading="lazy" className="max-h-9 w-auto max-w-full object-contain" />
      ) : (
        <span className="text-center font-display text-sm font-bold text-neutral-700">{c.name}</span>
      )}
    </div>
  );
}

export function TrustedBy() {
  return (
    <section className="overflow-hidden py-10 sm:py-12">
      <div className="container-page">
        <p className="mb-6 text-center text-[11px] font-bold tracking-[0.22em] text-muted uppercase sm:text-left">
          Trusted by Leading Brands & Organizations
        </p>
      </div>

      {/* prefers-reduced-motion: a plain wrapped grid, no scroll animation. */}
      <ul className="container-page hidden flex-wrap justify-center gap-3 motion-reduce:flex sm:justify-start">
        {clients.map((c) => (
          <li key={c.name}>
            <LogoTile c={c} />
          </li>
        ))}
      </ul>

      {/* Default: infinite marquee, edge-faded, pauses on hover. */}
      <div
        className="relative py-2 motion-reduce:hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <ul className="marquee-track flex w-max items-center gap-4">
          {[...clients, ...clients].map((c, i) => (
            <li key={`${c.name}-${i}`} aria-hidden={i >= clients.length}>
              <LogoTile c={c} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
