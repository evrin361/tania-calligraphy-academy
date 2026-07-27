import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export interface FooterProps {
  /** Footer content, entirely supplied by the consumer. */
  children?: ReactNode;
  className?: string;
}

/**
 * Structural page footer. Contains no content of its own — no links,
 * copy, or branding are assumed here.
 */
export function Footer({ children, className }: FooterProps) {
  return (
    <footer
      className={cn("w-full border-t border-neutral-200 bg-white", className)}
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </div>
    </footer>
  );
}
