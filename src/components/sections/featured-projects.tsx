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
function CategoryCard({ c }: { c: Category }) {
  const art = visualAssets[c.asset];
  return (
    <Link
      to="/projects"
      aria-label={`${c.title} — ${c.category}`}
      className="group block overflow-hidden rounded-2xl shadow-[var(--shadow)] transition-transform duration-300 hover:-translate-y-1"
      style={{ aspectRatio: `${art.width} / ${art.height}` }}
    >
      <img
        src={art.url}
        width={art.width}
        height={art.height}
        alt=""
        loading="lazy"
        className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
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
        <div className="grid gap-4 sm:grid-cols-2">
          {wide.map((c) => (
            <CategoryCard key={c.title} c={c} />
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {standard.map((c) => (
            <CategoryCard key={c.title} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
