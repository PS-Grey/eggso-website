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
          The first prototype used a DC gear motor with a 131:1 zinc spur gearbox,
          an H-bridge motor driver, and a hand-cut aluminium frame. Built for under £200
          from commodity components. An ESP32 ran the control loop with a browser-based
          dashboard for real-time monitoring.
        </p>
        <div className="space-y-3">
          <div>
            <span className="font-mono text-xs text-muted-foreground block mb-1">What worked</span>
            <ul className="font-mono text-xs text-foreground space-y-1">
              <li>• Constant resistance mode provided usable opposing force</li>
              <li>• Phase-based direction logic eliminated mid-rep oscillation</li>
              <li>• Browser dashboard with WebSocket streaming at 10Hz proved the data pipeline</li>
              <li>• Buffer zones at range-of-motion limits prevented overshoot</li>
              <li>• Exercise logging and rep counting functioned reliably</li>
            </ul>
          </div>
          <div>
            <span className="font-mono text-xs text-muted-foreground block mb-1">What failed</span>
            <ul className="font-mono text-xs text-foreground space-y-1">
              <li>• Zinc spur gears broke twice under normal exercise loads</li>
              <li>• 131:1 ratio made backdriving feel like pushing through concrete</li>
              <li>• P-only control caused see-saw oscillation — the derivative term was missing</li>
              <li>• 12V 2A power supply was massively underpowered</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-border">
          <p className="font-mono text-xs text-primary italic">
            Key insight: the gearbox defines the entire user experience. No amount of
            firmware compensates for wrong hardware.
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
          Complete redesign based on v0.1 learnings. A BLDC motor with an 8:1 steel
          planetary gearbox replaces the failed DC motor — the motor itself becomes the joint.
          CAN bus communication replaces analog wiring. A medical-grade elbow brace
          replaces the hand-cut aluminium frame.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 mt-4">
          <div>
            <span className="font-mono text-xs text-muted-foreground block mb-1">Motor upgrade</span>
            <ul className="font-mono text-xs text-foreground space-y-1">
              <li>• BLDC with 8:1 steel planetary gearbox</li>
              <li>• 22 Nm stall torque, 7.5 Nm nominal</li>
              <li>• Built-in 12-bit encoder (4096 CPR)</li>
              <li>• Fully backdrivable (~70-80% efficiency)</li>
              <li>• 378g, 92mm diameter</li>
            </ul>
          </div>
          <div>
            <span className="font-mono text-xs text-muted-foreground block mb-1">Architecture changes</span>
            <ul className="font-mono text-xs text-foreground space-y-1">
              <li>• CAN bus replaces analog wiring</li>
              <li>• Driver handles BLDC commutation natively</li>
              <li>• Torque, velocity, and position control on-driver</li>
              <li>• Dual-path safety: relay + electronic kill switch</li>
              <li>• 24V 8A power supply (vs 12V 2A)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrototypesSection;
