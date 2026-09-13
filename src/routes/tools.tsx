import { createFileRoute, Link } from "@tanstack/react-router";
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
        body="Claude for intelligence. Automation for the glue. Custom interfaces when the off-the-shelf tool isn't enough."
      />
      <section className="container-page grid gap-6 py-14 lg:grid-cols-3">
        {tools.map((group) => (
          <div key={group.group} className="rounded-3xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-extrabold tracking-tight">{group.group}</h2>
            <ul className="mt-5 space-y-4">
              {group.items.map((item) => (
                <li key={item.name} className="rounded-2xl bg-surface px-4 py-3">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-muted">{item.detail}</p>
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
