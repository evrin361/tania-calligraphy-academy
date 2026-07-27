/**
 * Generic navigation model, intentionally decoupled from any specific UI
 * component. Layout components (e.g. `Navbar`) consume this shape as
 * props — they never define navigation content themselves.
 */
export interface NavItem {
  /** Stable identifier, used for list rendering (e.g. React keys). */
  id: string;
  label: string;
  href: string;
  /** Marks the link as pointing outside the application. */
  external?: boolean;
}
