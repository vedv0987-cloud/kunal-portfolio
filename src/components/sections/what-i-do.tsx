import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Icon, type IconName } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/data/content";

export function WhatIDo() {
  return (
    <section className="py-14 sm:py-16">
      <div className="container-page">
        <SectionHeading
          title="What I Do"
          action={
            <Button asChild variant="outline" size="sm">
              <Link to="/services">
                All Services
                <Icon name="arrow" className="size-4" />
              </Link>
            </Button>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services"
              hash={s.slug}
              className="group rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon name={s.icon as IconName} className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold tracking-tight">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.summary}</p>
              <span className="mt-5 grid size-8 place-items-center rounded-full border border-border text-muted transition-colors group-hover:border-primary group-hover:text-primary">
                <Icon name="arrow" className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
