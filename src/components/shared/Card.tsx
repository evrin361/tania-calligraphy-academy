import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

export type CardPadding = "none" | "sm" | "md" | "lg";

export interface CardProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "className"
> {
  padding?: CardPadding;
  className?: string;
  children: ReactNode;
}

const paddingStyles: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

/**
 * Generic bordered surface container. No brand color or elevation
 * decisions are made here — only structural styling.
 */
export function Card({
  padding = "md",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-neutral-200 bg-white",
        paddingStyles[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
