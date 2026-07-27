import Image from "next/image";
import artistPhoto from "@/assets/artist.jpg";

/**
 * The artist's presence, not "a photo next to the text." The image
 * fills the entire hero and is masked with a diagonal feather so it
 * has no visible rectangular edge on the side facing the text — it
 * dissolves into the canvas rather than sitting beside it. A matching
 * purple-tinted scrim, drawn from the same brand void color as
 * `HeroBackground`, is layered over it so the photo's own dark tones
 * read as continuous with the rest of the composition rather than an
 * inserted foreign object.
 */
export function HeroArtistImage() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-10"
      style={{
        maskImage:
          "linear-gradient(112deg, transparent 0%, transparent 12%, black 55%, black 100%)",
        WebkitMaskImage:
          "linear-gradient(112deg, transparent 0%, transparent 12%, black 55%, black 100%)",
      }}
    >
      <Image
        src={artistPhoto}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_30%]"
        style={{ filter: "saturate(0.82) brightness(0.82)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, #1D002E 0%, rgba(29,0,46,0.78) 20%, rgba(29,0,46,0.1) 52%, rgba(29,0,46,0.4) 100%)",
        }}
      />
    </div>
  );
}
