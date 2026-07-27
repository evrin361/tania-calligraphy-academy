import { cn } from "@/utils/cn";
import { HeroBackground } from "./HeroBackground";
import { HeroArtwork } from "./HeroArtwork";
import { HeroContent } from "./HeroContent";

export interface HeroProps {
  className?: string;
}

/**
 * The site's introductory section. Composes background, artwork, and
 * content into a single layered canvas — the artwork bleeds behind the
 * text rather than sitting beside it in a separate column, so the
 * section reads as one unified composition.
 */
export function Hero({ className }: HeroProps) {
  return (
    <section
      aria-label="Introduction"
      className={cn(
        "relative isolate overflow-hidden py-24 sm:py-32 lg:py-40",
        className,
      )}
    >
      <HeroBackground />
      <HeroArtwork />
      <div className="hero-fade-up">
        <HeroContent />
      </div>
    </section>
  );
}
