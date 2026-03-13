import heroImage from "@/assets/hero-exo.jpg";

const HeroSection = () => {
  return (
    <section id="overview" className="mb-20">
      <div className="rounded-sm overflow-hidden mb-10 border border-border">
        <img
          src={heroImage}
          alt="Technical blueprint illustration of the Eggso elbow exoskeleton joint mechanism"
          className="w-full h-48 sm:h-64 object-cover"
          loading="eager"
        />
      </div>

      <h2 className="font-display text-3xl font-semibold tracking-tight">
        A portable exoskeleton that
        <br />
        resists, guides & supports motion
      </h2>
      <div className="mt-6 space-y-4 font-mono text-sm text-muted-foreground leading-relaxed max-w-2xl">
        <p>
          Eggso is a motorised elbow exoskeleton designed for rehabilitation exercise
          and adaptive strength training. Unlike conventional exoskeletons that assist
          movement, Eggso inverts the principle — motors provide controlled, programmable
          resistance that the user works against.
        </p>
        <p>
          The result is a wearable resistance machine with infinite load curves.
          Resistance profiles are adjusted in real time based on joint angle, velocity,
          and muscle activity — making every rep adaptive to the user's current capacity.
        </p>
        <p>
          The first prototype was built from commodity components for under £200.
          It reads real-time sensor data and dynamically adjusts motor behaviour
          on a continuous spectrum — within a single rep.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-4 font-mono text-xs">
        <div className="border border-border px-4 py-3 rounded-sm">
          <span className="text-muted-foreground block">Status</span>
          <span className="text-foreground font-medium mt-0.5 block">v0.1 Complete — v0.2 In Progress</span>
        </div>
        <div className="border border-border px-4 py-3 rounded-sm">
          <span className="text-muted-foreground block">Joint</span>
          <span className="text-foreground font-medium mt-0.5 block">Elbow (Flexion / Extension)</span>
        </div>
        <div className="border border-border px-4 py-3 rounded-sm">
          <span className="text-muted-foreground block">Target</span>
          <span className="text-foreground font-medium mt-0.5 block">Physiotherapy Clinics</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
