import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  action,
  className,
}: {
  title: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-8 flex items-end justify-between gap-4", className)}>
      <h2 className="font-display flex items-center gap-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
        <span className="inline-block h-1 w-5 rounded-full bg-primary" aria-hidden />
        {title}
      </h2>
      {action}
    </div>
  );
}
