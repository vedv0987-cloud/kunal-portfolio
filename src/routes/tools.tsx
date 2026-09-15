import { createFileRoute, Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { tools } from "@/data/content";

export const Route = createFileRoute("/tools")({ component: ToolsPage });

function ToolsPage() {
  return (
    <>
      <PageHero
        kicker="Tools"
        title="The stack I actually ship with."
        body="Frontier AI for thinking and creating, cinematic generators for visuals, and code + automation to turn it all into systems that run."
      />

      <section className="container-page space-y-12 py-12 sm:space-y-16 sm:py-16">
        {tools.map((group) => (
          <div key={group.group} className="grid gap-6 lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-10">
            <div>
              <h2 className="font-display flex items-center gap-3 text-2xl font-extrabold tracking-tight">
                <span className="inline-block h-1 w-5 rounded-full bg-primary" aria-hidden />
                {group.group}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{group.blurb}</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[var(--shadow)]"
                >
                  <BrandLogo item={item} className="transition-transform duration-300 group-hover:scale-110" />
                  <div className="min-w-0">
                    <p className="font-display font-bold leading-tight">{item.name}</p>
                    <p className="mt-0.5 text-sm leading-snug text-muted">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="container-page pb-16">
        <div className="flex flex-col items-start justify-between gap-4 rounded-3xl bg-ink px-8 py-10 text-ink-fg sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-extrabold">Need a custom tool?</h2>
            <p className="mt-1 text-sm text-white/70">If it doesn't exist, we build it.</p>
          </div>
          <Button asChild size="lg">
            <Link to="/contact">
              Let's Talk
              <Icon name="arrow" className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
