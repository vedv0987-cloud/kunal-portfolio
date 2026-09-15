import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { homeCategories } from "@/data/content";
import { visualAssets } from "@/data/visual-assets";

/** Home "Featured" strip — six visual categories with white card footers (roadmap Phase B). */
export function FeaturedProjects() {
  return (
    <section className="py-6 sm:py-10">
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
        {/*
          home/thumb-* assets are complete cards with the category label and
          arrow already baked into the artwork (no artwork-only variant
          exists for these, unlike work/artwork vs work/cards) — so the image
          IS the card. A live caption on top would duplicate the baked text
          (roadmap §4: never render a second heading over words already in
          the PNG). aria-label supplies the accessible name the baked text
          can't provide.
        */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {homeCategories.map((c) => {
            const art = visualAssets[c.asset];
            return (
              <Link
                key={c.title}
                to="/projects"
                aria-label={`${c.title} — ${c.category}`}
                className="group overflow-hidden rounded-2xl shadow-[var(--shadow)] transition-transform duration-300 hover:-translate-y-1"
              >
                <img
                  src={art.url}
                  width={art.width}
                  height={art.height}
                  alt=""
                  className="aspect-[4/3] w-full object-cover"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
