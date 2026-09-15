import { clients } from "@/data/content";

/** Real client logos where supplied (public/images/clients/); a plain text chip otherwise — never a fabricated mark. */
export function TrustedBy() {
  return (
    <section className="py-8 sm:py-10">
      <div className="container-page">
        <p className="mb-5 text-center text-[11px] font-bold tracking-[0.22em] text-muted uppercase sm:text-left">
          Trusted by Leading Brands & Organizations
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:justify-start">
          {clients.map((c) =>
            c.logo ? (
              <li key={c.name} className="flex h-8 items-center">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-full max-w-[140px] object-contain opacity-80 grayscale transition-[opacity,filter] duration-200 hover:opacity-100 hover:grayscale-0"
                />
              </li>
            ) : (
              <li
                key={c.name}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-bold text-muted-2"
              >
                {c.name}
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
