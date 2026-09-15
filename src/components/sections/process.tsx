import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Icon, type IconName } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/data/content";

export function Process() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-page">
        <SectionHeading
          title="My Process"
          action={
            <Button asChild variant="outline" size="sm">
              <Link to="/pricing">
                Let's Work Together
                <Icon name="arrow" className="size-4" />
              </Link>
            </Button>
          }
        />
        <ol data-reveal data-reveal-group className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <li key={step.title} className="relative text-center">
              {i < processSteps.length - 1 ? (
                <span
                  className="absolute top-6 left-[58%] hidden h-px w-[84%] bg-border lg:block"
                  aria-hidden
                />
              ) : null}
              <span className="relative z-10 mx-auto grid size-12 place-items-center rounded-full bg-primary-soft text-primary">
                <Icon name={step.icon as IconName} className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold">
                {step.n}. {step.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
