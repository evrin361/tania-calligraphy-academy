/**
 * Full-bleed atmospheric backdrop for the Hero. A warm parchment tone
 * with two very low-opacity radial washes for depth — deliberately not
 * a vivid gradient, just quiet tonal variation across the paper.
 */
export function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#F4EEDF]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 15% 10%, rgba(36,31,28,0.05), transparent 60%), " +
            "radial-gradient(ellipse 70% 60% at 100% 100%, rgba(36,31,28,0.06), transparent 65%)",
        }}
      />
    </div>
  );
}
