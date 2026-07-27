import Image from "next/image";
import logoMark from "@/assets/logo-mark.png";

/**
 * Brand identity, rendered as a watermark rather than a badge. The
 * official transparent logo is stretched tall through the full height
 * of the composition at very low opacity, blended with `soft-light` so
 * it reads as a glow within the canvas rather than a graphic placed on
 * top of it. It is deliberately not confined to a corner — it is the
 * vertical thread the rest of the composition is built around.
 */
export function HeroArtwork() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-1/2 z-20 w-[75%] max-w-[420px] -translate-x-1/2 opacity-[0.09] mix-blend-soft-light sm:w-[52%] sm:opacity-[0.12] lg:w-[38%]"
    >
      <Image src={logoMark} alt="" fill priority className="object-contain" />
    </div>
  );
}
