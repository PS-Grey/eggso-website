const modes = [
  {
    name: "Constant Resistance",
    description:
      "A fixed opposing torque regardless of arm position or speed. The resistance level is set and maintained throughout the exercise. Useful for baseline strength testing and simple resistance training.",
  },
  {
    name: "Isokinetic",
    description:
      "A PID controller maintains constant angular velocity. If the arm moves too fast, resistance increases. Too slow, it decreases. The clinical gold standard for joint assessment — the user always pushes at maximum effort while the system auto-matches resistance.",
  },
  {
    name: "Adaptive (EMG-Driven)",
    description:
      "Muscle activity is read in real time via EMG sensors. Strong muscle contraction triggers resistance; detected fatigue transitions the system to assistance. Resistance and support shift dynamically within a single rep.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="mb-20">
      <h3 className="font-display text-lg font-semibold tracking-tight mb-2">
        How It Works
      </h3>
      <p className="font-mono text-sm text-muted-foreground mb-8 max-w-xl leading-relaxed">
        Most exoskeletons use motors to assist movement. Eggso inverts that —
        motors provide controlled resistance. By varying current to a BLDC motor,
        precise, programmable force is generated that the user must work against.
      </p>

      <div className="border border-border rounded-sm p-5 mb-4">
        <span className="font-mono text-xs text-muted-foreground">The core mechanism</span>
        <p className="font-mono text-sm text-foreground mt-2 leading-relaxed">
          A brushless DC motor with a steel planetary gearbox sits at the elbow joint.
          The motor doesn't move the arm — it resists it. Torque is controlled through
          a closed-loop system running at 1kHz, reading joint angle, velocity, and
          muscle activity to compute the appropriate resistance in real time. The system
          is fully backdrivable — when unpowered, the joint moves freely.
        </p>
      </div>

      <h4 className="font-display text-base font-medium mt-8 mb-4">Control Modes</h4>
      <div className="grid gap-4 sm:grid-cols-3">
        {modes.map((mode) => (
          <div key={mode.name} className="border border-border bg-card p-5 rounded-sm">
            <h5 className="font-display text-sm font-medium">{mode.name}</h5>
            <p className="font-mono text-xs text-muted-foreground mt-2 leading-relaxed">
              {mode.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
