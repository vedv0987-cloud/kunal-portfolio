import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { Icon, type IconName } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { site, socials } from "@/data/content";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Let's Talk"
        title="Tell me what you want to build."
        body="Share the idea. I'll come back with a clear next step — scope, timeline, and how we'd ship it."
      />
      <section className="container-page py-14">
        <div className="mb-10 flex flex-wrap gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:border-primary"
            >
              <Icon name={s.icon as IconName} className="size-4" />
              {s.label}
            </a>
          ))}
          <span className="inline-flex items-center rounded-full bg-surface px-4 py-2 text-sm text-muted">
            {site.location}
          </span>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
