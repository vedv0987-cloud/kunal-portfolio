import { trustedBy } from "@/data/content";

export function TrustedBy() {
  return (
    <section className="py-8 sm:py-10">
      <div className="container-page">
        <p className="mb-5 text-center text-[11px] font-bold tracking-[0.22em] text-muted uppercase sm:text-left">
          Trusted Across Industries
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
          {trustedBy.map((label) => (
            <li
              key={label}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-bold text-muted-2"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
