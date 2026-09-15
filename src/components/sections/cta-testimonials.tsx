import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/data/content";
import { derived } from "@/data/derived-assets";

const banner = derived.homeCta;

export function CtaTestimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index] ?? testimonials[0];

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="pb-16">
      <div className="container-page space-y-8">
        {/*
          Roadmap Phase B — full-width red-sun mountain CTA banner. This PNG
          is a complete, finished banner (heading, copy and a "Let's Work
          Together" button are already baked into the art) — no artwork-only
          variant exists, so per roadmap §4 it's used as-is with no live text
          overlay duplicating it. The whole image is one real link.
        */}
        <Link to="/contact" className="block overflow-hidden rounded-3xl transition-transform hover:-translate-y-0.5">
          <img
            src={banner.url}
            width={banner.width}
            height={banner.height}
            alt="Let's Create Something Extraordinary — start a project"
            className="w-full object-cover"
          />
        </Link>

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
          <div className="relative mx-auto max-w-2xl rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
            <p className="text-[17px] leading-relaxed font-medium">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt="" className="size-11 rounded-full object-cover" />
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
