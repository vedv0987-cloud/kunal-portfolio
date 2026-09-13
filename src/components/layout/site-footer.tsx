import { Heart } from "lucide-react";
import { Logo } from "@/components/logo";
import { Icon, type IconName } from "@/components/icons";
import { socials } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <Logo />

        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm font-semibold text-muted">Let's Connect</span>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={s.label}
                className="grid size-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon name={s.icon as IconName} className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <p className="text-sm text-muted">
          Made with{" "}
          <Heart className="mx-0.5 inline size-3.5 fill-primary text-primary" aria-hidden />{" "}
          by Vedprakash
          <span className="mt-0.5 block text-muted-2">Ideas to a Smarter Tomorrow</span>
        </p>
      </div>
    </footer>
  );
}
