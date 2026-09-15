import { SplitWords } from "@/components/split-words";

export function PageHero({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <section className="border-b border-border bg-surface/60">
      <div className="container-page py-12 sm:py-16">
        <p className="rise-in mb-3 flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-primary uppercase">
          <span className="inline-block h-0.5 w-4 rounded-full bg-primary" />
          {kicker}
        </p>
        <h1 className="font-display max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          <SplitWords text={title} baseDelay={80} />
        </h1>
        <p className="rise-in mt-4 max-w-2xl text-base text-muted sm:text-lg" style={{ animationDelay: "320ms" }}>
          {body}
        </p>
      </div>
    </section>
  );
}
