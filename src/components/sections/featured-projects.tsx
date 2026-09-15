import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { homeCategories } from "@/data/content";
import { visualAssets } from "@/data/visual-assets";

type Category = (typeof homeCategories)[number];

/**
 * home/thumb-* are complete cards (category label + arrow baked in near the
 * edges), in two different native shapes: healthcare/real-estate are wide
 * (~1.85:1), the other four are ~1.27:1. Forcing one aspect ratio cropped
 * the baked labels ("THCARE", "L ESTATE"), so each row uses its images'
 * real shape instead — nothing is cropped.
 */
// Native size of the baked-caption home/thumb-* cards, so a live-caption card lines up with its row.
const THUMB_RATIO = "1409 / 1117";

function CategoryCard({ c }: { c: Category }) {
  const art = visualAssets[c.asset];
  const live = "label" in c && c.label;
  return (
    <Link
      to="/projects"
      search={{ category: c.category }}
      aria-label={`${c.title} — ${c.category}`}
      data-tilt
      className="group block overflow-hidden rounded-2xl shadow-[var(--shadow)] hover:-translate-y-1 hover:shadow-[0_26px_50px_-24px_rgb(10_10_10/0.45)]"
      style={{ aspectRatio: live ? THUMB_RATIO : `${art.width} / ${art.height}` }}
    >
      <img
        src={art.url}
        width={art.width}
        height={art.height}
        alt=""
        loading="lazy"
        className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      {live ? (
        <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/25 to-transparent p-4 text-white sm:p-5">
          <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">{c.category}</span>
          <span className="font-display mt-1 flex items-center justify-between gap-2 text-base leading-tight font-extrabold sm:text-lg">
            {c.title}
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-white">
              <Icon name="arrow" className="size-4" />
            </span>
          </span>
        </span>
      ) : null}
    </Link>
  );
}

export function FeaturedProjects() {
  const wide = homeCategories.slice(0, 2);
  const standard = homeCategories.slice(2);
  return (
    <section className="py-10 sm:py-14">
      <div className="container-page">
        <SectionHeading
          title="Featured Work"
          action={
            <Button asChild variant="outline" size="sm">
              <Link to="/projects">
                View All Work
                <Icon name="arrow" className="size-4" />
              </Link>
            </Button>
          }
        />
        <div data-reveal data-reveal-group className="grid gap-4 sm:grid-cols-2">
          {wide.map((c) => (
            <CategoryCard key={c.title} c={c} />
          ))}
        </div>
        <div data-reveal data-reveal-group className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {standard.map((c) => (
            <CategoryCard key={c.title} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
