/**
 * Full-bleed atmospheric canvas for the Hero. The base color is the
 * exact deep aubergine (#1D002E) sampled from the official academy
 * logo's background, so the very first thing the visitor sees is a
 * literal extension of the brand's own color — not an invented one.
 * A faint gold glow (echoing the logo's gold) and a soft dark vignette
 * add quiet depth without ever reading as a "gradient blob."
 */
export function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#1D002E]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 10% 5%, rgba(198,165,82,0.09), transparent 55%), " +
            "radial-gradient(ellipse 85% 75% at 100% 100%, rgba(9,0,14,0.85), transparent 62%)",
        }}
      />
    </div>
  );
}
