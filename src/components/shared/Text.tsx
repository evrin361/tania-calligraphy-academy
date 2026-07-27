import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

export type TextSize = "xs" | "sm" | "base" | "lg";
export type TextTone = "default" | "muted";

export interface TextProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "className"
> {
  /** Element to render as. Defaults to `p`. */
  as?: ElementType;
  size?: TextSize;
  tone?: TextTone;
  className?: string;
  children: ReactNode;
}

const sizeStyles: Record<TextSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
};

const toneStyles: Record<TextTone, string> = {
  default: "text-neutral-900",
  muted: "text-neutral-500",
};

/**
 * Generic body-copy primitive. Renders a `<p>` by default; pass `as` to
 * render inline (`span`) or other text-level elements.
 */
export function Text({
  as: Tag = "p",
  size = "base",
  tone = "default",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Tag
      className={cn(
        "leading-relaxed",
        sizeStyles[size],
        toneStyles[tone],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
