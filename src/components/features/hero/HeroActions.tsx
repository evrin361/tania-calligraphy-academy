/**
 * Hero actions, in the site's primary reading direction (RTL). The
 * secondary link's arrow points left, matching the direction Persian
 * reading naturally continues in. Hrefs are placeholders — no
 * destination pages exist yet.
 */
export function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-6">
      <a
        href="#"
        className="inline-flex h-12 items-center justify-center rounded-sm bg-[#C6A552] px-7 text-sm font-medium tracking-wide text-[#1D002E] transition-colors duration-150 hover:bg-[#E9D9A8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1D002E] focus-visible:ring-[#E9D9A8]"
      >
        آغاز تمرین
      </a>

      <a
        href="#"
        className="group inline-flex items-center gap-2 rounded-sm text-sm font-medium text-[#B8A9C4] transition-colors duration-150 hover:text-[#EDE6D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1D002E] focus-visible:ring-[#E9D9A8]"
      >
        آشنایی با رویکرد ما
        <span
          aria-hidden="true"
          className="transition-transform duration-150 group-hover:-translate-x-0.5"
        >
          ←
        </span>
      </a>
    </div>
  );
}
