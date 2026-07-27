import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ContainerProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "className"
> {
  size?: ContainerSize;
  className?: string;
  children: ReactNode;
}

const sizeStyles: Record<ContainerSize, string> = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

/**
 * Horizontally centered, width-constrained content wrapper with
 * responsive side padding. Purely structural — no visual/brand styling.
 */
export function Container({
  size = "lg",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
