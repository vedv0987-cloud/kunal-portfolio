import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { Icon, type IconName } from "@/components/icons";
import { nav, socials, site } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page flex flex-col gap-6 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Logo />

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Footer">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-semibold text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/pricing"
              className="text-sm font-semibold text-muted transition-colors hover:text-foreground"
            >
              Contact
            </Link>
            <Link
              to="/testimonials"
              className="text-sm font-semibold text-muted transition-colors hover:text-foreground"
            >
              Testimonials
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={s.label}
                data-magnetic="0.4"
                className="grid size-10 place-items-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary"
              >
                <Icon name={s.icon as IconName} className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5 text-sm text-muted">
          <a href={`mailto:${site.email}`} className="hover:text-primary">{site.email}</a>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-primary">{site.phone}</a>
          <span>{site.location}</span>
        </div>
      </div>
    </footer>
  );
}
