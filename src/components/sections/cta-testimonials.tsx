import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/data/content";

export function CtaTestimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index] ?? testimonials[0];

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="pb-16">
      <div className="container-page grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden rounded-3xl bg-ink text-ink-fg">
          <div className="grid items-stretch md:grid-cols-[1.15fr_0.85fr]">
            <div className="relative z-10 px-8 py-10 sm:px-10">
              <h2 className="font-display max-w-sm text-3xl font-extrabold tracking-tight sm:text-4xl">
                Let's Build Something Amazing Together
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
                Turn your ideas into powerful AI solutions. Fast. Reliable. Future ready.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link to="/contact">
                  Start a Project
                  <Icon name="arrow" className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="relative hidden min-h-[240px] md:block">
              <img
                src="/images/robot-wave.jpg"
                alt=""
                className="absolute inset-0 size-full object-cover object-[center_20%]"
              />
              <p className="absolute bottom-8 left-4 rotate-[-12deg] text-sm font-semibold text-white/90">
                Good Ideas
                <span className="block">Always Win</span>
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            title="What Clients Say"
            className="mb-4"
            action={
              <Button asChild variant="ghost" size="sm">
                <Link to="/testimonials">See all</Link>
              </Button>
            }
          />
          <div className="relative rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
            <p className="text-[17px] leading-relaxed font-medium">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt=""
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 text-primary" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Icon key={i} name="star" className="size-4 fill-primary" />
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="grid size-10 place-items-center rounded-full border border-border hover:bg-surface"
                  aria-label="Previous testimonial"
                >
                  <Icon name="arrow" className="size-4 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="grid size-10 place-items-center rounded-full border border-border hover:bg-surface"
                  aria-label="Next testimonial"
                >
                  <Icon name="arrow" className="size-4" />
                </button>
              </div>
              <div className="flex gap-1.5">
                {testimonials.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-label={`Show testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`size-2 rounded-full ${i === index ? "bg-primary" : "bg-border"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
