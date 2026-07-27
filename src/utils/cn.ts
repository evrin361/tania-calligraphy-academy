type ClassValue = string | number | null | false | undefined;

/**
 * Combines conditional class names into a single string, skipping any
 * falsy values. A minimal, dependency-free alternative to `clsx`.
 */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
