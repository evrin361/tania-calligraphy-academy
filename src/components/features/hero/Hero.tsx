import { cn } from "@/utils/cn";
import { HeroBackground } from "./HeroBackground";
import { HeroArtistImage } from "./HeroArtistImage";
import { HeroArtwork } from "./HeroArtwork";
import { HeroContent } from "./HeroContent";

export interface HeroProps {
  className?: string;
}

/**
 * The site's introductory section, composed as one continuous canvas
 * rather than a grid of columns. Every layer spans the full section:
 * the void-colored background, the artist's presence (feathered into
 * the canvas, not boxed beside it), the brand watermark (blended
 * through the whole composition, not confined to a badge), and the
 * text (floating, unboxed, on top). Nothing here occupies its own
 * independent column — the layers overlap by design.
 */
export function Hero({ className }: HeroProps) {
  return (
    <section
      aria-label="Introduction"
      className={cn(
        "relative isolate min-h-[92vh] overflow-hidden bg-[#1D002E] lg:min-h-screen",
        className,
      )}
    >
      <HeroBackground />
      <HeroArtistImage />
      <HeroArtwork />
      <div className="hero-fade-up relative z-30 flex min-h-[92vh] items-center py-20 lg:min-h-screen">
        <HeroContent />
      </div>
    </section>
  );
}
