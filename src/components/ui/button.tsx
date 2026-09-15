import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Transitions come from the `[data-magnetic]` rule in styles.css so the magnetic drift and colors share one timing.
  "btn-fluid inline-flex items-center justify-center gap-2 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-fg shadow-[0_8px_20px_-10px_var(--primary)] [--fluid:rgb(0_0_0/0.18)] hover:shadow-[0_14px_28px_-12px_var(--primary)]",
        outline:
          "border border-border bg-card text-foreground [--fluid:var(--primary-soft)] hover:border-primary/40",
        ink: "bg-ink text-ink-fg [--fluid:rgb(255_255_255/0.16)]",
        ghost: "bg-transparent text-foreground [--fluid:rgb(0_0_0/0.05)]",
        soft: "bg-primary-soft text-primary [--fluid:var(--primary)] hover:text-primary-fg",
      },
      size: {
        sm: "h-9 rounded-full px-3.5 text-sm",
        md: "h-11 rounded-full px-5 text-sm",
        lg: "h-12 rounded-full px-6 text-[15px]",
        icon: "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild,
  type = "button",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-magnetic=""
      className={cn(buttonVariants({ variant, size }), className)}
      {...(asChild ? props : { type, ...props })}
    />
  );
}
