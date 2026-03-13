const principles = [
  "Hardware defines the experience. Component selection determines what's possible.",
  "Safety circuits have no software dependency. Physical disconnect path only.",
  "The control loop must handle edge cases gracefully at range-of-motion limits.",
  "Log everything. Cannot debug what cannot be observed.",
  "Test on target users, not developers. Suitability matters more than capability.",
];

const DesignPrinciplesSection = () => {
  return (
    <section id="principles" className="mb-20">
      <h3 className="font-display text-lg font-semibold tracking-tight mb-2">
        Design Principles
      </h3>
      <p className="font-mono text-sm text-muted-foreground mb-8">
        Key learnings from building.
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
