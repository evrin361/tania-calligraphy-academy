import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps extends Omit<
  HTMLAttributes<HTMLHeadingElement>,
  "className"
> {
  /** Semantic heading level, `<h1>`–`<h6>`. */
  level?: HeadingLevel;
  /**
   * Visual size scale, independent of semantic level, so a heading can be
   * styled differently from its document-outline position.
   */
  size?: HeadingLevel;
  className?: string;
  children: ReactNode;
}

const sizeStyles: Record<HeadingLevel, string> = {
  1: "text-4xl sm:text-5xl font-semibold tracking-tight",
  2: "text-3xl sm:text-4xl font-semibold tracking-tight",
  3: "text-2xl sm:text-3xl font-semibold tracking-tight",
  4: "text-xl sm:text-2xl font-semibold",
  5: "text-lg sm:text-xl font-medium",
  6: "text-base sm:text-lg font-medium",
};

/**
 * Semantic heading primitive with an independent visual size scale.
 * No brand typography or color tokens are applied here.
 */
export function Heading({
  level = 2,
  size,
  className,
  children,
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as const;
  const visualSize = size ?? level;

  return (
    <Tag className={cn(sizeStyles[visualSize], className)} {...props}>
      {children}
    </Tag>
  );
}
