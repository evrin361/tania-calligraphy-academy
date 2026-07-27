import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export interface PageShellProps {
  /** Typically a `Header`, but any content may be passed. */
  header?: ReactNode;
  /** Typically a `Footer`, but any content may be passed. */
  footer?: ReactNode;
  /** Main page content. */
  children: ReactNode;
  className?: string;
}

/**
 * Top-level page structure: header, a growing main region, and footer.
 * Knows nothing about the implementation of the slots it renders,
 * keeping it fully reusable and decoupled from any specific header,
 * footer, or page content.
 */
export function PageShell({
  header,
  footer,
  children,
  className,
}: PageShellProps) {
  return (
    <div className={cn("flex min-h-screen flex-col", className)}>
      {header}
      <main className="flex-1">{children}</main>
      {footer}
    </div>
  );
}
