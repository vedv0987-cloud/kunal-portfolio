import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import { caseStudyProcess, projects } from "@/data/content";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <article>
      <div className="bg-ink">
        <div className="container-page py-10">
          <Link to="/projects" className="text-sm font-semibold text-white/70 hover:text-white">
            ← All projects
          </Link>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-2xl text-white/70">{project.blurb}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <img src={project.image} alt="" className="mx-auto max-h-[420px] w-full object-cover" />
      </div>

      <div className="border-b border-border bg-surface/60">
        <div className="container-page grid grid-cols-2 gap-6 py-6 sm:grid-cols-4">
          <Fact label="Client" value={project.client} />
          <Fact label="Category" value={project.tags[0] ?? "—"} />
          <Fact label="Year" value={project.year} />
          <Fact label="Stack" value={`${project.stack.length} tools`} />
        </div>
      </div>

      <section className="container-page grid gap-5 py-14 sm:grid-cols-3">
        <InfoTile icon="target" title="The Challenge" body={project.problem} />
        <InfoTile icon="bulb" title="The Approach" body={project.solution} />
        <div className="rounded-3xl border border-border bg-card p-6">
          <span className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-primary">
            <Icon name="cube" className="size-5" />
          </span>
          <h2 className="font-display mt-4 text-lg font-bold">Key Deliverables</h2>
          <ul className="mt-3 space-y-2">
            {project.stack.map((s) => (
              <li key={s} className="flex items-center gap-2 text-sm font-semibold">
                <Icon name="check" className="size-4 shrink-0 text-primary" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-surface/60 py-14">
        <div className="container-page">
          <h2 className="font-display mb-8 flex items-center gap-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
            <span className="inline-block h-1 w-5 rounded-full bg-primary" aria-hidden />
            AI Production Workflow
          </h2>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {caseStudyProcess.map((step) => (
              <li key={step.n} className="rounded-2xl border border-border bg-card p-5">
                <span className="font-display text-2xl font-extrabold text-primary">{step.n}</span>
                <h3 className="mt-2 font-display text-sm font-bold">{step.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink py-10 text-ink-fg">
        <div className="container-page grid grid-cols-2 gap-6 sm:grid-cols-4">
          {project.impact.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-2xl font-extrabold sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <Block title="The problem" body={project.problem} />
          <Block title="What I built" body={project.solution} />
          <Block title="The result" body={project.result} />
        </div>
        <aside className="h-fit rounded-3xl border border-border bg-card p-6">
          <dl className="space-y-4 text-sm">
            <Row label="Client" value={project.client} />
            <Row label="Year" value={project.year} />
            <div>
              <dt className="text-xs font-bold tracking-wide text-muted uppercase">Stack</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span key={s} className="rounded-full bg-surface px-2.5 py-1 text-xs font-semibold">
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
          <Button asChild className="mt-6 w-full">
            <Link to="/contact">
              Start something similar
              <Icon name="arrow" className="size-4" />
            </Link>
          </Button>
        </aside>
      </section>
    </article>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] font-bold tracking-wide text-muted uppercase">{label}</dt>
      <dd className="mt-1 text-sm font-bold">{value}</dd>
    </div>
  );
}

function InfoTile({
  icon,
  title,
  body,
}: {
  icon: "target" | "bulb";
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6">
      <span className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-primary">
        <Icon name={icon} className="size-5" />
      </span>
      <h2 className="font-display mt-4 text-lg font-bold">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-extrabold tracking-tight">{title}</h2>
      <p className="mt-2 leading-relaxed text-muted">{body}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-bold tracking-wide text-muted uppercase">{label}</dt>
      <dd className="mt-1 font-semibold">{value}</dd>
    </div>
  );
}
