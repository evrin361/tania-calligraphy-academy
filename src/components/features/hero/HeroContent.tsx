import { Container } from "@/components/shared";
import { HeroActions } from "./HeroActions";

/**
 * The Hero's text, written for a Persian-primary, RTL-reading audience.
 * The block sits at the composition's inline-start (the right edge in
 * RTL) so it reads as "near the center," not pinned to the far side
 * opposite the artist. No card, no background fill — it floats.
 */
export function HeroContent() {
  return (
    <Container size="lg" className="relative z-30">
      <div className="max-w-xl text-right">
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium text-[#C6A552]">
          <span className="tracking-normal">آکادمی خوشنویسی تانیا</span>
          <span aria-hidden="true" className="h-px w-8 bg-[#C6A552]/40" />
          <span
            dir="ltr"
            lang="en"
            className="text-[10px] uppercase tracking-[0.3em]"
          >
            Tania Calligraphy Academy
          </span>
        </div>

        <h1 className="mt-6 font-serif text-4xl leading-[1.25] text-[#EDE6D8] [text-shadow:0_2px_24px_rgba(9,0,14,0.55)] sm:text-5xl lg:text-6xl">
          <span className="block">جایی که قلم</span>
          <span className="block">سکوت را به یاد می‌آورد</span>
        </h1>

        <p className="mt-6 max-w-md text-base leading-loose text-[#B8A9C4] [text-shadow:0_1px_16px_rgba(9,0,14,0.5)] sm:text-lg">
          بازگشتی آرام به خوشنویسی ایرانی؛ نستعلیق و شکسته، حرف‌به‌حرف، در مسیر
          استادان کهن.
        </p>

        <HeroActions />
      </div>
    </Container>
  );
}
