import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export interface HeaderProps {
  /** Logo or wordmark, supplied by the consumer. */
  logoSlot?: ReactNode;
  /** Typically a `Navbar`, but any content may be passed. */
  navSlot?: ReactNode;
  /** Secondary actions (e.g. a CTA button), supplied by the consumer. */
  actionsSlot?: ReactNode;
  /** Enables a sticky, viewport-pinned header. */
  sticky?: boolean;
  className?: string;
}

/**
 * Structural page header. Purely a layout container — it renders
 * whatever slots are passed to it and applies no brand styling.
 */
export function Header({
  logoSlot,
  navSlot,
  actionsSlot,
  sticky = false,
  className,
}: HeaderProps) {
  return (
    <header
      className={cn(
        "w-full border-b border-neutral-200 bg-white",
        sticky && "sticky top-0 z-40",
        className,
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {logoSlot ? (
          <div className="flex shrink-0 items-center">{logoSlot}</div>
        ) : null}
        {navSlot ? (
          <div className="flex flex-1 items-center justify-center">
            {navSlot}
          </div>
        ) : null}
        {actionsSlot ? (
          <div className="flex shrink-0 items-center gap-2">{actionsSlot}</div>
        ) : null}
      </div>
    </header>
  );
}
