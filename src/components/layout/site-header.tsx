import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import { nav } from "@/data/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled
          ? "border-border bg-background/95"
          : "border-transparent bg-background",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                  active ? "text-primary" : "text-foreground/80 hover:text-foreground",
                )}
              >
                {item.label}
                {active ? (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="md" className="hidden sm:inline-flex">
            <Link to="/pricing">
              Let's Talk
              <Icon name="arrow" className="size-4" />
            </Link>
          </Button>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-border bg-card lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} className="size-5" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-xl px-3 py-3 text-base font-semibold hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="lg" className="mt-3 w-full">
              <Link to="/pricing">
                Let's Talk
                <Icon name="arrow" className="size-4" />
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
