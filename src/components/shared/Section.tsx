import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

export type SectionSpacing = "none" | "sm" | "md" | "lg";

export interface SectionProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "className"
> {
  spacing?: SectionSpacing;
  className?: string;
  children: ReactNode;
}

const spacingStyles: Record<SectionSpacing, string> = {
  none: "py-0",
  sm: "py-8",
  md: "py-16",
  lg: "py-24",
};

/**
 * Semantic vertical rhythm wrapper for page regions. Renders a native
 * `<section>` element. No layout content or business logic.
 */
export function Section({
  spacing = "md",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(spacingStyles[spacing], className)} {...props}>
      {children}
    </section>
  );
}
