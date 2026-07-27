/**
 * The Hero's signature element: an original, abstract ink-brush flourish
 * rendered as layered stroke passes (to suggest hand-inked weight
 * variation) terminating in a small seal mark — evoking the artist's
 * chop used to sign a finished work. Purely decorative and generated
 * in code, so it carries no dependency on external image assets.
 */
export function HeroArtwork() {
  const strokePath =
    "M 470 30 C 360 110 410 250 280 330 C 170 400 115 505 190 600 " +
    "C 225 655 305 672 355 630";

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 800"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-y-0 right-[-8%] z-10 hidden h-full w-[65%] sm:block md:w-[55%] lg:right-0 lg:w-[46%]"
    >
      <path
        d={strokePath}
        fill="none"
        stroke="#241F1C"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.1"
      />
      <path
        d={strokePath}
        fill="none"
        stroke="#241F1C"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.22"
      />
      <path
        d={strokePath}
        fill="none"
        stroke="#241F1C"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />

      <circle
        cx="355"
        cy="630"
        r="16"
        fill="none"
        stroke="#8C3B2E"
        strokeWidth="1"
        opacity="0.35"
      />
      <circle cx="355" cy="630" r="7" fill="#8C3B2E" opacity="0.75" />
    </svg>
  );
}
