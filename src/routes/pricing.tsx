import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties, type PointerEvent } from "react";
import { Icon, type IconName } from "@/components/icons";
import { ProposalDialog } from "@/components/proposal-dialog";
import { RotatingWords } from "@/components/rotating-words";
import { Button } from "@/components/ui/button";
import { finalPrice, formatINR, pricingPlans, type PricingPlan } from "@/data/pricing";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — VEDPRAKASH" },
      {
        name: "description",
        content: "AI visuals, cinematic video, websites and automation packs — Starter, Pro, Premium and Enterprise.",
      },
    ],
  }),
  component: PricingPage,
});

const PRICING_ACCENTS = ["Serious results.", "Real growth.", "Zero guesswork.", "Faster launches."];

const INCLUDED: { icon: IconName; title: string; body: string }[] = [
  { icon: "spark", title: "AI-first production", body: "Frontier AI tools, art-directed by hand." },
  { icon: "target", title: "Clear scope", body: "Deliverables and timeline agreed before work starts." },
  { icon: "file", title: "Proposal by email", body: "Pricing, payment details and terms in one place." },
  { icon: "chat", title: "Direct access", body: "You work with me directly — no hand-offs." },
];

const STEPS = [
  { n: "01", title: "Pick a pack", body: "Choose what fits — or Enterprise for a custom scope." },
  { n: "02", title: "Confirm your details", body: "Share your email and mobile number, then confirm." },
  { n: "03", title: "Get your proposal", body: "Pricing, payment and legal details land in your inbox." },
];

function PricingPage() {
  const [selected, setSelected] = useState<PricingPlan | null>(null);

  return (
    <>
      <section className="relative overflow-hidden pt-12 pb-4 sm:pt-16">
        <div aria-hidden className="pricing-aurora pointer-events-none absolute inset-x-0 -top-40 h-[480px]" />
        <div className="container-page relative text-center">
          <p className="rise-in inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-bold shadow-[var(--shadow-card)]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Save up to 35% on packs
          </p>
          <h1
            className="rise-in font-display mx-auto mt-5 max-w-3xl text-[2.6rem] font-extrabold tracking-tight sm:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            <span className="sr-only">Simple packs. Serious results.</span>
            <span aria-hidden className="block">
              Simple packs.
            </span>
            <RotatingWords
              words={PRICING_ACCENTS}
              interval={2800}
              delay={600}
              className="justify-items-center"
              wordClassName="text-gradient-anim"
            />
          </h1>
          <p
            className="rise-in mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            AI visuals, cinematic video, websites and automation — bundled into clear packs so you know exactly what you
            get.
          </p>
        </div>
      </section>

      <section className="container-page pt-10 pb-6">
        <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} onChoose={setSelected} />
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted">
          Prices in INR. Every pack can be tailored — your proposal confirms the final scope.
        </p>
      </section>

      <section className="container-page py-12">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INCLUDED.map((item, i) => (
            <li
              key={item.title}
              className="price-reveal flex items-start gap-3 rounded-2xl border border-border bg-card p-5"
              style={{ "--delay": `${700 + i * 90}ms` } as CSSProperties}
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon name={item.icon} className="size-5" />
              </span>
              <div>
                <p className="font-display font-bold">{item.title}</p>
                <p className="mt-0.5 text-sm leading-snug text-muted">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page pb-16">
        <div className="overflow-hidden rounded-[1.6rem] bg-ink p-6 text-ink-fg sm:p-10">
          <h2 className="font-display flex items-center gap-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
            <span className="inline-block h-1 w-5 rounded-full bg-primary" aria-hidden />
            How it works
          </h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-3">
            {STEPS.map((step) => (
              <li key={step.n} className="relative border-t border-white/10 pt-5">
                <span className="font-display text-3xl font-extrabold text-primary">{step.n}</span>
                <p className="font-display mt-2 text-lg font-bold">{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/65">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ProposalDialog plan={selected} onClose={() => setSelected(null)} />
    </>
  );
}

function PlanCard({
  plan,
  index,
  onChoose,
}: {
  plan: PricingPlan;
  index: number;
  onChoose: (plan: PricingPlan) => void;
}) {
  const price = finalPrice(plan);
  const featured = Boolean(plan.highlight);

  // Cursor spotlight + a gentle 3D tilt (mouse only).
  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--sx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--sy", `${(y * 100).toFixed(1)}%`);
    el.style.setProperty("--rx", `${((0.5 - y) * 5).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${((x - 0.5) * 6).toFixed(2)}deg`);
  };
  const onLeave = (e: PointerEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };

  const muted = featured ? "text-white/60" : "text-muted";

  return (
    <div className="price-reveal h-full" style={{ "--delay": `${150 + index * 120}ms` } as CSSProperties}>
      <article
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className={cn(
          "price-card relative flex h-full flex-col rounded-[1.6rem] p-6 sm:p-7",
          featured
            ? "price-card--featured text-ink-fg shadow-[0_30px_60px_-30px_rgb(225_29_46/0.45)]"
            : "border border-border bg-card shadow-[var(--shadow-card)]",
        )}
      >
        {plan.badge ? (
          <span
            className={cn(
              "absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.14em] uppercase shadow-sm",
              featured ? "shimmer bg-primary text-white" : "bg-ink text-ink-fg",
            )}
          >
            {plan.badge}
          </span>
        ) : null}

        <div className="flex items-center gap-3">
          <span
            className={cn(
              "grid size-11 shrink-0 place-items-center rounded-xl",
              featured ? "bg-white/10 text-primary" : "bg-primary-soft text-primary",
            )}
          >
            <Icon name={plan.icon} className="size-5" />
          </span>
          <div className="min-w-0">
            <h2 className="font-display text-xl font-extrabold tracking-tight">{plan.name}</h2>
            <p className={cn("text-sm leading-snug", muted)}>{plan.tagline}</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex h-6 flex-wrap items-center gap-2">
            {plan.listPrice !== undefined && plan.discountPct ? (
              <>
                <s className={cn("text-sm font-semibold", featured ? "text-white/45" : "text-muted-2")}>
                  {formatINR(plan.listPrice)}
                </s>
                <span className="shimmer rounded-full bg-primary px-2 py-0.5 text-[11px] font-bold text-white">
                  Save {plan.discountPct}%
                </span>
              </>
            ) : null}
          </div>
          {plan.listPrice !== undefined && price !== undefined ? (
            <>
              <p className="font-display mt-1 text-[2.4rem] leading-none font-extrabold tracking-tight" aria-label={formatINR(price)}>
                <CountUp from={plan.listPrice} to={price} delay={650 + index * 120} />
              </p>
              <p className={cn("mt-2 text-xs", muted)}>per pack · INR</p>
            </>
          ) : (
            <>
              <p className="font-display mt-1 text-[2.4rem] leading-none font-extrabold tracking-tight">Let's talk</p>
              <p className={cn("mt-2 text-xs", muted)}>Custom scope, custom quote</p>
            </>
          )}
        </div>

        <Button
          size="lg"
          variant={featured ? "primary" : "outline"}
          className="mt-6 w-full"
          onClick={() => onChoose(plan)}
        >
          {plan.cta}
          <Icon name="arrow" className="size-4" />
        </Button>

        <div className={cn("my-6 h-px", featured ? "bg-white/10" : "bg-border")} />

        {plan.includesFrom ? (
          <p className={cn("mb-3 text-[11px] font-bold tracking-[0.16em] uppercase", muted)}>
            Everything in {plan.includesFrom}, plus
          </p>
        ) : null}
        <ul className="space-y-2.5">
          {plan.features.map((feature, j) => (
            <li
              key={feature}
              className="price-feature flex items-start gap-2.5 text-sm leading-snug"
              style={{ "--delay": `${450 + index * 120 + j * 55}ms` } as CSSProperties}
            >
              <span
                className={cn(
                  "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                  featured ? "bg-primary text-white" : "bg-primary/10 text-primary",
                )}
              >
                <Icon name="check" className="size-3" />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

/** Rolls the price down from the list price to the discounted price once the card appears. */
function CountUp({ from, to, delay }: { from: number; to: number; delay: number }) {
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (from === to || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let start = 0;
    setValue(from);
    const timer = window.setTimeout(() => {
      const step = (now: number) => {
        if (!start) start = now;
        const p = Math.min(1, (now - start) / 1400);
        const eased = 1 - Math.pow(1 - p, 4);
        setValue(Math.round(from + (to - from) * eased));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [from, to, delay]);

  return (
    <span aria-hidden className="tabular-nums">
      {formatINR(value)}
    </span>
  );
}
