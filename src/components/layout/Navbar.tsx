"use client";

import { useId, useState } from "react";
import type { NavItem } from "@/types/navigation";
import { cn } from "@/utils/cn";

export interface NavbarProps {
  /** Navigation content, supplied by the consumer — never hardcoded here. */
  items: NavItem[];
  /** Accessible name for the `<nav>` landmark. */
  ariaLabel?: string;
  className?: string;
}

const linkStyles =
  "rounded px-1 text-sm font-medium text-neutral-700 hover:text-neutral-900 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500";

/**
 * Structural navigation bar. Renders a horizontal list on wider
 * viewports and an accessible disclosure menu on narrow viewports.
 * Contains no navigation content of its own — `items` is required.
 */
export function Navbar({
  items,
  ariaLabel = "Primary",
  className,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  return (
    <nav aria-label={ariaLabel} className={cn("relative", className)}>
      <ul className="hidden items-center gap-6 md:flex">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={linkStyles}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 md:hidden"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        >
          {isOpen ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <ul
          id={menuId}
          className="absolute inset-x-0 top-full z-30 flex flex-col gap-1 border-t border-neutral-200 bg-white p-4 md:hidden"
        >
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="block rounded px-2 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
