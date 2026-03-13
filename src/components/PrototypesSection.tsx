const PrototypesSection = () => {
  return (
    <section id="prototypes" className="mb-20">
      <h3 className="font-display text-lg font-semibold tracking-tight mb-2">
        Prototypes
      </h3>
      <p className="font-mono text-sm text-muted-foreground mb-8 max-w-xl leading-relaxed">
        Each iteration revealed fundamental lessons about what works
        in wearable resistance devices — and what doesn't.
      </p>

      {/* v0.1 */}
      <div className="border border-border rounded-sm p-5 mb-4">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-primary bg-primary/5 px-2 py-0.5 rounded">
            v0.1
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            Proof of Concept — Complete
          </span>
        </div>
        <p className="font-mono text-sm text-foreground leading-relaxed mb-4">
          The first prototype was built from commodity components to validate the
          core concept: can a motor-based system provide useful, controllable resistance
          for rehabilitation exercises? A microcontroller ran the control loop with a
          browser-based dashboard for real-time monitoring.
        </p>
        <div className="space-y-3">
          <div>
            <span className="font-mono text-xs text-muted-foreground block mb-1">What worked</span>
            <ul className="font-mono text-xs text-foreground space-y-1">
              <li>• Constant resistance mode provided usable opposing force</li>
              <li>• Browser dashboard with real-time streaming proved the data pipeline</li>
              <li>• Exercise logging and rep counting functioned reliably</li>
            </ul>
          </div>
          <div>
            <span className="font-mono text-xs text-muted-foreground block mb-1">Lessons learned</span>
            <ul className="font-mono text-xs text-foreground space-y-1">
              <li>• Gearbox selection is critical — it defines the entire user experience</li>
              <li>• The control loop requires careful tuning to avoid oscillation</li>
              <li>• Power supply must be sized for peak load, not nominal</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-border">
          <p className="font-mono text-xs text-primary italic">
            Key insight: reached ceiling fast due to the limited hardware capabilities.     
          </p>
        </div>
      </div>

      {/* v0.2 */}
      <div className="border border-border rounded-sm p-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-primary bg-primary/5 px-2 py-0.5 rounded">
            v0.2
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            In Development
          </span>
        </div>
        <p className="font-mono text-sm text-foreground leading-relaxed mb-4">
          Complete redesign based on v0.1 learnings. A BLDC motor with a planetary
          gearbox replaces the previous drive system. The motor itself becomes the joint.
          Digital bus communication replaces analog wiring. A medical-grade elbow brace
          replaces the hand-cut frame.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 mt-4">
          <div>
            <span className="font-mono text-xs text-muted-foreground block mb-1">Motor upgrade</span>
            <ul className="font-mono text-xs text-foreground space-y-1">
              <li>• BLDC with steel planetary gearbox</li>
              <li>• Sufficient torque for upper-limb rehabilitation</li>
              <li>• Built-in high-resolution encoder</li>
              <li>• Fully backdrivable</li>
            </ul>
          </div>
          <div>
            <span className="font-mono text-xs text-muted-foreground block mb-1">Architecture changes</span>
            <ul className="font-mono text-xs text-foreground space-y-1">
              <li>• Digital bus replaces analog wiring</li>
              <li>• Motor commutation handled on-driver</li>
              <li>• Torque, velocity, and position control on-driver</li>
              <li>• Dual-path safety: relay + electronic kill switch</li>
            </ul>
          </div>
        </div>
      </div>
    </section>);

};

export default PrototypesSection;