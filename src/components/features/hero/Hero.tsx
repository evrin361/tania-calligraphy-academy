import { cn } from "@/utils/cn";
import { HeroBackground } from "./HeroBackground";
import { HeroArtistImage } from "./HeroArtistImage";
import { HeroArtwork } from "./HeroArtwork";
import { HeroContent } from "./HeroContent";

export interface HeroProps {
  className?: string;
}

/**
 * The site's introductory section, composed for a Persian-primary,
 * RTL-reading audience as one continuous canvas rather than a grid of
 * columns. The reading flow moves brand → narrative → artist, right
 * to left: the void-colored background, the artist's presence
 * (feathered into the canvas on the left), the brand watermark
 * (blended through the whole composition, not confined to a badge),
 * and the text (floating, unboxed, toward the right). Nothing here
 * occupies its own independent column — the layers overlap by design.
 */
export function Hero({ className }: HeroProps) {
  return (
    <section
      dir="rtl"
      lang="fa"
      aria-label="معرفی"
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
