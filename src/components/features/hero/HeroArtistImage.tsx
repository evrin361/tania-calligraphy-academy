import Image from "next/image";
import artistPhoto from "@/assets/artist.jpg";

/**
 * The artist's presence, positioned toward the left of the canvas —
 * where RTL reading naturally arrives after the brand mark and
 * narrative. Not "a photo next to the text": the image fills the
 * entire hero and is masked with a diagonal feather so it has no
 * visible rectangular edge on the side facing the text, and a
 * purple-tinted scrim (the same brand void color as `HeroBackground`)
 * ties its dark tones to the rest of the composition.
 */
export function HeroArtistImage() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-10"
      style={{
        maskImage:
          "linear-gradient(248deg, transparent 0%, transparent 12%, black 55%, black 100%)",
        WebkitMaskImage:
          "linear-gradient(248deg, transparent 0%, transparent 12%, black 55%, black 100%)",
      }}
    >
      <Image
        src={artistPhoto}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[32%_30%]"
        style={{ filter: "saturate(0.82) brightness(0.82)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(260deg, #1D002E 0%, rgba(29,0,46,0.78) 20%, rgba(29,0,46,0.1) 52%, rgba(29,0,46,0.4) 100%)",
        }}
      />
    </div>
  );
}
