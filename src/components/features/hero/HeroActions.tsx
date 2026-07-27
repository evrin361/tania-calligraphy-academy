/**
 * Hero actions. Rendered as real links (not the generic `Button`
 * primitive, which is a `<button>`) since these are navigational.
 * Hrefs are placeholders — no destination pages exist yet.
 */
export function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-6">
      <a
        href="#"
        className="inline-flex h-12 items-center justify-center rounded-sm bg-[#241F1C] px-7 text-sm font-medium tracking-wide text-[#F4EEDF] transition-colors duration-150 hover:bg-[#3a332d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#A9812E]"
      >
        Begin the Practice
      </a>

      <a
        href="#"
        className="group inline-flex items-center gap-2 rounded-sm text-sm font-medium text-[#6B5842] transition-colors duration-150 hover:text-[#241F1C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#A9812E]"
      >
        Learn about our approach
        <span
          aria-hidden="true"
          className="transition-transform duration-150 group-hover:translate-x-0.5"
        >
          →
        </span>
      </a>
    </div>
  );
}
