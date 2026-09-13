import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import { projects } from "@/data/content";

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
