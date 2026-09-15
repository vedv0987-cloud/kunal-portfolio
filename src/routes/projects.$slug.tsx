import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import { SplitWords } from "@/components/split-words";
import { projects } from "@/data/content";
import { visualAssets } from "@/data/visual-assets";

// Roadmap Phase F — case-study/workflow/* are complete cards (number/icon/
// title/body baked in) whose text matches caseStudyProcess exactly (real,
// already-approved copy) — used as-is instead of the live-rendered list.
const WORKFLOW_ASSETS = [
  "case-study/workflow/research-reference",
  "case-study/workflow/ai-ideation",
  "case-study/workflow/refine-direct",
  "case-study/workflow/post-production",
  "case-study/workflow/multi-platform",
];

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectDetail,
});

/**
 * Roadmap Phase F exit gate — one reusable template that renders a full
 * case study (Blu Diamond, with real challenge/approach/deliverables) and
 * a graceful minimal page for the other 8 (client/category/summary only,
 * no fabricated numbers or narrative) without any per-project branching.
 */
function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const art = project.image ? visualAssets[project.image] : undefined;
  const hasCaseStudy = Boolean(project.problem || project.solution || project.stack.length);

  return (
    <article>
      <div className="bg-ink">
        <div className="container-page py-10">
          <Link to="/projects" className="text-sm font-semibold text-white/70 hover:text-white">
            ← All projects
          </Link>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            <SplitWords text={project.title} baseDelay={60} />
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
        {art ? (
          <img src={art.url} alt="" className="mx-auto max-h-[420px] w-full object-cover" />
        ) : (
          <div className="mx-auto grid h-[220px] max-h-[420px] w-full place-items-center bg-gradient-to-br from-primary/15 via-transparent to-transparent">
            <Icon name="cube" className="size-12 text-white/15" />
          </div>
        )}
      </div>

      <div className="border-b border-border bg-surface/60">
        <div className="container-page grid grid-cols-2 gap-6 py-6 sm:grid-cols-3">
          <Fact label="Client" value={project.client} />
          <Fact label="Category" value={project.tags[0] ?? "—"} />
          <Fact label="Deliverables" value={project.stack.length ? `${project.stack.length} items` : "In progress"} />
        </div>
      </div>

      {hasCaseStudy ? (
        <>
          {project.problem || project.solution ? (
            <section className="container-page grid gap-5 py-14 sm:grid-cols-2">
              {project.problem ? <InfoTile icon="target" title="The Challenge" body={project.problem} /> : null}
              {project.solution ? <InfoTile icon="bulb" title="The Approach" body={project.solution} /> : null}
            </section>
          ) : null}

          {project.stack.length ? (
            <section className="container-page pb-14">
              <div className="rounded-3xl border border-border bg-card p-6">
                <span className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-primary">
                  <Icon name="cube" className="size-5" />
                </span>
                <h2 className="font-display mt-4 text-lg font-bold">Key Deliverables</h2>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.stack.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm font-semibold">
                      <Icon name="check" className="size-4 shrink-0 text-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}

          <section className="border-t border-border bg-surface/60 py-14">
            <div className="container-page">
              <h2 className="font-display mb-8 flex items-center gap-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                <span className="inline-block h-1 w-5 rounded-full bg-primary" aria-hidden />
                AI Production Workflow
              </h2>
              <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {WORKFLOW_ASSETS.map((key) => (
                  <li key={key} className="overflow-hidden rounded-2xl border border-border">
                    <img src={visualAssets[key].url} alt="" className="w-full" />
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Gallery — only generic, unbranded photography (see data/content.ts for what was excluded and why). */}
          {project.gallery.length ? (
            <section className="container-page py-14">
              <h2 className="font-display mb-8 flex items-center gap-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                <span className="inline-block h-1 w-5 rounded-full bg-primary" aria-hidden />
                Gallery
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {project.gallery.map((key) => (
                  <img
                    key={key}
                    src={visualAssets[key].url}
                    alt=""
                    className="aspect-square w-full rounded-2xl object-cover"
                  />
                ))}
              </div>
            </section>
          ) : null}
        </>
      ) : (
        <section className="container-page py-14">
          <div className="rounded-3xl border border-dashed border-border bg-surface/60 p-8 text-center">
            <p className="text-sm font-semibold text-muted">
              The full case study for this project — gallery, results and process breakdown — is in progress.
            </p>
          </div>
        </section>
      )}

      {project.impact.length ? (
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
      ) : null}

      <section className="container-page py-14">
        <div className="rounded-3xl border border-border bg-card p-6 text-center">
          <p className="font-display text-lg font-bold">Want something like this?</p>
          <Button asChild className="mt-4">
            <Link to="/pricing">
              Start something similar
              <Icon name="arrow" className="size-4" />
            </Link>
          </Button>
        </div>
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
