const principles = [
  "Hardware defines the experience. No amount of firmware compensates for wrong hardware.",
  "Safety circuits have no software dependency. Button → relay → power. Physical air gap.",
  "Phase-based logic, not velocity-based. Direction changes only at buffer zones.",
  "Buffer zones are walls, not gaps. Motor ramps resistance at boundaries.",
  "PID needs the derivative term. Proportional-only control oscillates.",
  "Filter inputs before the control loop. Noisy readings make the damping term unstable.",
  "Log everything including controller state. Cannot debug what cannot be observed.",
  "Test on target users, not developers. Overpowering a rehab device proves nothing about suitability.",
];

const DesignPrinciplesSection = () => {
  return (
    <section id="principles" className="mb-20">
      <h3 className="font-display text-lg font-semibold tracking-tight mb-2">
        Design Principles
      </h3>
      <p className="font-mono text-sm text-muted-foreground mb-8">
        Lessons extracted from building. Each was learned the hard way.
      </p>
      <div className="space-y-0">
        {principles.map((p, i) => (
          <div
            key={i}
            className={`flex gap-4 px-5 py-3.5 font-mono text-sm ${
              i % 2 === 0 ? "bg-card" : "bg-secondary/50"
            }`}
          >
            <span className="text-primary font-medium shrink-0 w-6">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-foreground leading-relaxed">{p}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignPrinciplesSection;
