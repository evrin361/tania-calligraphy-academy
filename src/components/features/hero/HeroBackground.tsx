/**
 * Full-bleed atmospheric canvas for the Hero. The base color is the
 * exact deep aubergine (#1D002E) sampled from the official academy
 * logo's background. The faint gold glow now sits toward the right
 * (behind the narrative, in an RTL composition) and the deeper
 * vignette toward the left (behind the artist), mirroring the rest of
 * the layout's reading direction.
 */
export function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#1D002E]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 90% 5%, rgba(198,165,82,0.09), transparent 55%), " +
            "radial-gradient(ellipse 85% 75% at 0% 100%, rgba(9,0,14,0.85), transparent 62%)",
        }}
      />
    </div>
  );
}
