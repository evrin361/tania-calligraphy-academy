import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export type DividerOrientation = "horizontal" | "vertical";

export interface DividerProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "className"
> {
  orientation?: DividerOrientation;
  className?: string;
}

/**
 * Accessible visual separator. Renders `<hr>` for the horizontal case
 * (the semantically correct element) and a `role="separator"` div for
 * the vertical case, since `<hr>` has no vertical equivalent.
 */
export function Divider({
  orientation = "horizontal",
  className,
  ...props
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn("w-px self-stretch bg-neutral-200", className)}
        {...props}
      />
    );
  }

  return (
    <hr
      className={cn("h-px w-full border-0 bg-neutral-200", className)}
      {...props}
    />
  );
}
