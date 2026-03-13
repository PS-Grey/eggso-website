import { useState, useEffect } from "react";
import SideNav from "@/components/SideNav";
import TimelineItem from "@/components/TimelineItem";
import AchievementCard from "@/components/AchievementCard";

const roadmapItems = [
  {
    date: "2024 Q1",
    title: "Concept & Research",
    description: "Literature review on resistance-based rehabilitation. Defined core principle: motor-driven variable resistance across joints.",
    status: "done" as const,
  },
  {
    date: "2024 Q2",
    title: "Single Joint Prototype",
    description: "Designed and fabricated the first single-joint module. BLDC motor with encoder feedback for precise torque control.",
    status: "done" as const,
  },
  {
    date: "2024 Q3–Now",
    title: "Control System Development",
    description: "Implementing closed-loop resistance control. Tuning PID parameters for smooth, predictable force profiles across ROM.",
    status: "current" as const,
  },
  {
    date: "2025 Q1",
    title: "Multi-Joint Expansion",
    description: "Extend to elbow and shoulder joints. Mechanical coupling design for coordinated multi-axis resistance.",
    status: "upcoming" as const,
  },
  {
    date: "2025 Q3",
    title: "Wearable Integration",
    description: "Lightweight frame design. Battery and embedded compute for untethered operation.",
    status: "upcoming" as const,
  },
  {
    date: "2026",
    title: "Clinical Validation",
    description: "Partner with rehabilitation centers for controlled studies. Measure outcomes against conventional therapy.",
    status: "upcoming" as const,
  },
];

const achievements = [
  {
    date: "2024-06",
    title: "First Resistance Profile",
    description: "Successfully generated a programmable resistance curve on a single joint with ±2% torque accuracy.",
    metric: "Torque accuracy: ±2%",
  },
  {
    date: "2024-08",
    title: "Encoder Integration",
    description: "14-bit absolute encoder providing real-time joint angle feedback at 1kHz sampling rate.",
    metric: "Sampling rate: 1kHz",
  },
  {
    date: "2024-10",
    title: "Passive Backdrivability",
    description: "Achieved full backdrivability — the joint can be moved freely when motors are unpowered. Critical for safety.",
    metric: "Backdriving force: <0.5 Nm",
  },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-baseline justify-between">
          <div>
            <h1 className="font-display text-xl font-semibold tracking-tight">
              EXO<span className="text-primary">.</span>LOG
            </h1>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            Resistance-Based Exoskeleton — Project Log
          </span>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 py-12 flex gap-16">
        <SideNav activeSection={activeSection} />

        <main className="flex-1 min-w-0">
          {/* Overview */}
          <section id="overview" className="mb-20">
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Building an exoskeleton for
              <br />
              rehabilitation & recreation
            </h2>
            <div className="mt-6 space-y-4 font-mono text-sm text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                This project documents the development of a motor-driven exoskeleton
                that provides variable resistance across joints. The core mechanism
                uses BLDC motors as programmable resistance elements — not actuators.
              </p>
              <p>
                The system is designed for two use cases: guided rehabilitation
                (progressive resistance therapy) and recreational fitness
                (strength training with adaptive load curves).
              </p>
              <p>
                Current state: single-joint prototype with closed-loop torque control.
              </p>
            </div>
            <div className="mt-8 flex gap-6 font-mono text-xs">
              <div className="border border-border px-4 py-3 rounded-sm">
                <span className="text-muted-foreground block">Status</span>
                <span className="text-foreground font-medium mt-0.5 block">Single Joint — Active</span>
              </div>
              <div className="border border-border px-4 py-3 rounded-sm">
                <span className="text-muted-foreground block">Principle</span>
                <span className="text-foreground font-medium mt-0.5 block">Motor Resistance Control</span>
              </div>
              <div className="border border-border px-4 py-3 rounded-sm">
                <span className="text-muted-foreground block">Application</span>
                <span className="text-foreground font-medium mt-0.5 block">Rehab & Recreation</span>
              </div>
            </div>
          </section>

          {/* Journey */}
          <section id="journey" className="mb-20">
            <h3 className="font-display text-lg font-semibold tracking-tight mb-2">
              Journey
            </h3>
            <p className="font-mono text-sm text-muted-foreground mb-8 max-w-xl leading-relaxed">
              The project started with a simple question: can you use motors not
              to move a limb, but to resist it — with programmable force profiles?
              Here's what happened.
            </p>
            <div className="space-y-0">
              <div className="border border-border rounded-sm p-5 mb-4">
                <span className="font-mono text-xs text-muted-foreground">The core insight</span>
                <p className="font-mono text-sm text-foreground mt-2 leading-relaxed">
                  Most exoskeletons use motors to assist movement. This project
                  inverts that — motors provide controlled resistance. By varying
                  current to a BLDC motor, you get precise, programmable force
                  that a user must work against. This turns the exoskeleton into
                  a wearable resistance machine with infinite load curves.
                </p>
              </div>
              <div className="border border-border rounded-sm p-5">
                <span className="font-mono text-xs text-muted-foreground">Current focus</span>
                <p className="font-mono text-sm text-foreground mt-2 leading-relaxed">
                  Perfecting torque control on a single knee joint. The challenge
                  is making resistance feel natural — smooth onset, consistent
                  through range of motion, and immediate release when needed.
                  Safety is non-negotiable: the system must be fully backdrivable.
                </p>
              </div>
            </div>
          </section>

          {/* Roadmap */}
          <section id="roadmap" className="mb-20">
            <h3 className="font-display text-lg font-semibold tracking-tight mb-2">
              Roadmap
            </h3>
            <p className="font-mono text-sm text-muted-foreground mb-8">
              Development timeline and milestones.
            </p>
            <div>
              {roadmapItems.map((item) => (
                <TimelineItem key={item.title} {...item} />
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section id="achievements" className="mb-20">
            <h3 className="font-display text-lg font-semibold tracking-tight mb-2">
              Achievements
            </h3>
            <p className="font-mono text-sm text-muted-foreground mb-8">
              Key technical milestones reached.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {achievements.map((a) => (
                <AchievementCard key={a.title} {...a} />
              ))}
            </div>
          </section>

          {/* Specs */}
          <section id="specs" className="mb-20">
            <h3 className="font-display text-lg font-semibold tracking-tight mb-2">
              Technical Specifications
            </h3>
            <p className="font-mono text-sm text-muted-foreground mb-8">
              Current prototype parameters.
            </p>
            <div className="border border-border rounded-sm overflow-hidden">
              {[
                ["Motor Type", "Brushless DC (BLDC)"],
                ["Peak Torque", "12 Nm"],
                ["Encoder", "14-bit absolute, 1kHz"],
                ["Control Loop", "PID, 1kHz update rate"],
                ["Backdriving Force", "< 0.5 Nm"],
                ["Joint Coverage", "Knee (single axis)"],
                ["Power Supply", "48V DC (bench supply)"],
                ["Communication", "CAN bus"],
              ].map(([label, value], i) => (
                <div
                  key={label}
                  className={`flex justify-between px-5 py-3 font-mono text-sm ${
                    i % 2 === 0 ? "bg-card" : "bg-secondary/50"
                  }`}
                >
                  <span className="text-muted-foreground">{label}</span>
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-6 font-mono text-xs text-muted-foreground">
          EXO.LOG — Project documentation. Not a product. Not for sale.
        </div>
      </footer>
    </div>
  );
};

export default Index;
