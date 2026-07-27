import { Container } from "@/components/shared";
import { HeroActions } from "./HeroActions";

/**
 * The Hero's text. Deliberately not wrapped in any bordered or
 * background-filled block — it floats directly on the composition. The
 * `Container` here only establishes the same horizontal rhythm used
 * elsewhere on the site; it renders no visible box of its own.
 */
export function HeroContent() {
  return (
    <Container size="lg" className="relative z-30">
      <div className="max-w-xl">
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-[#C6A552]">
          <span>Tania Calligraphy Academy</span>
          <span aria-hidden="true" className="h-px w-8 bg-[#C6A552]/40" />
          <span
            dir="rtl"
            lang="fa"
            className="text-sm normal-case tracking-normal"
          >
            خوشنویسی
          </span>
        </div>

        <h1 className="mt-6 font-serif text-4xl leading-[1.15] text-[#EDE6D8] [text-shadow:0_2px_24px_rgba(9,0,14,0.55)] sm:text-5xl lg:text-6xl">
          <span className="block">Where the Pen</span>
          <span className="block">Remembers Silence</span>
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-[#B8A9C4] [text-shadow:0_1px_16px_rgba(9,0,14,0.5)] sm:text-lg">
          A quiet return to Persian calligraphy — nasta&#8217;līq and shekasteh,
          taught by hand, one stroke at a time, in the tradition of the old
          masters.
        </p>

        <HeroActions />
      </div>
    </Container>
  );
}
