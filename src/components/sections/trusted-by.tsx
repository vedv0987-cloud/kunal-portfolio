import { clients } from "@/data/content";

/** Real client logos where supplied (public/images/clients/); a plain text chip otherwise — never a fabricated mark. */
function Logo({ c }: { c: (typeof clients)[number] }) {
  return c.logo ? (
    <img
      src={c.logo}
      alt={c.name}
      className="h-8 max-w-[140px] object-contain opacity-80 grayscale transition-[opacity,filter] duration-200 hover:opacity-100 hover:grayscale-0"
    />
  ) : (
    <span className="rounded-full border border-border bg-card px-4 py-2 text-sm font-bold text-muted-2">
      {c.name}
    </span>
  );
}

export function TrustedBy() {
  return (
    <section className="overflow-hidden py-8 sm:py-10">
      <div className="container-page">
        <p className="mb-5 text-center text-[11px] font-bold tracking-[0.22em] text-muted uppercase sm:text-left">
          Trusted by Leading Brands & Organizations
        </p>
      </div>

      {/* prefers-reduced-motion: a plain wrapped list, no scroll animation. */}
      <ul className="container-page hidden flex-wrap items-center justify-center gap-x-8 gap-y-4 motion-reduce:flex sm:justify-start">
        {clients.map((c) => (
          <li key={c.name} className="flex h-8 items-center">
            <Logo c={c} />
          </li>
        ))}
      </ul>

      {/* Default: an infinite scrolling marquee, edge-faded, pauses on hover/focus. */}
      <div
        className="relative motion-reduce:hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <ul className="marquee-track flex w-max items-center gap-12">
          {[...clients, ...clients].map((c, i) => (
            <li key={`${c.name}-${i}`} className="flex h-8 items-center" aria-hidden={i >= clients.length}>
              <Logo c={c} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
