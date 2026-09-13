import { createFileRoute } from "@tanstack/react-router";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { testimonials } from "@/data/content";

export const Route = createFileRoute("/testimonials")({ component: TestimonialsPage });

function TestimonialsPage() {
  return (
    <>
      <PageHero
        kicker="Testimonials"
        title="What clients say."
        body="Straight words from people who shipped with me."
      />
      <section className="container-page grid gap-5 py-14 sm:grid-cols-2">
        {testimonials.map((t) => (
          <article key={t.name} className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <div className="flex gap-0.5 text-primary" aria-label={`${t.rating} out of 5`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Icon key={i} name="star" className="size-4 fill-primary" />
              ))}
            </div>
            <p className="mt-4 text-[17px] leading-relaxed font-medium">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-6 flex items-center gap-3">
              <img src={t.avatar} alt="" className="size-12 rounded-full object-cover" />
              <div>
                <p className="font-bold">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
