import { Container } from "@/components/shared";
import { HeroActions } from "./HeroActions";

/**
 * The Hero's textual content. Composed with the shared `Container` for
 * consistent page-width rhythm; typography here is bespoke to the Hero
 * rather than the general content scale, since a display headline has
 * different needs than body copy elsewhere on the site.
 */
export function HeroContent() {
  return (
    <Container size="lg" className="relative z-20">
      <div className="max-w-xl">
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-[#6B5842]">
          <span>Tania Calligraphy Academy</span>
          <span aria-hidden="true" className="h-px w-8 bg-[#D9CDB0]" />
          <span
            dir="rtl"
            lang="fa"
            className="text-sm normal-case tracking-normal"
          >
            خوشنویسی
          </span>
        </div>

        <h1 className="mt-6 font-serif text-4xl leading-[1.15] text-[#241F1C] sm:text-5xl lg:text-6xl">
          <span className="block">Where the Pen</span>
          <span className="block">Remembers Silence</span>
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-[#6B5842] sm:text-lg">
          A quiet return to Persian calligraphy — nasta&#8217;līq and shekasteh,
          taught by hand, one stroke at a time, in the tradition of the old
          masters.
        </p>

        <HeroActions />
      </div>
    </Container>
  );
}
