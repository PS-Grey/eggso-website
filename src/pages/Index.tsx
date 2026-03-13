import { useState, useEffect } from "react";
import SideNav from "@/components/SideNav";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PrototypesSection from "@/components/PrototypesSection";
import TimelineItem from "@/components/TimelineItem";
import AchievementCard from "@/components/AchievementCard";
import DesignPrinciplesSection from "@/components/DesignPrinciplesSection";
import eggsoLogo from "@/assets/eggso-logo.png";

const roadmapItems = [
  {
    date: "2024 Q4",
    title: "Research & Proof of Concept",
    description: "Literature review, market analysis, and initial feasibility study. Identified open-source exoskeleton projects (ExoKit, EduExo) as starting points.",
    status: "done" as const,
  },
  {
    date: "2025 Q1",
    title: "v0.1 — Single Joint Prototype",
    description: "First working prototype built from commodity components under £200. DC gear motor, H-bridge driver, ESP32 control loop with browser dashboard.",
    status: "done" as const,
  },
  {
    date: "2025 Q1–Q2",
    title: "v0.2 — Motor & Frame Redesign",
    description: "BLDC motor with steel planetary gearbox, CAN bus communication, medical elbow brace frame. Addressing all v0.1 failure points.",
    status: "current" as const,
  },
  {
    date: "2025 Q3",
    title: "Clinical Feedback",
    description: "Demonstration to physiotherapy practitioners. Gathering feedback on resistance feel, data usefulness, and clinical workflow integration.",
    status: "upcoming" as const,
  },
  {
    date: "2025 Q4",
    title: "Multi-Joint Expansion",
    description: "Extending to shoulder joint. Mechanical coupling design for coordinated multi-axis resistance across the upper limb.",
    status: "upcoming" as const,
  },
  {
    date: "2026",
    title: "Portable Operation",
    description: "Battery-powered operation using e-bike battery packs. Embedded compute for untethered clinical use.",
    status: "upcoming" as const,
  },
];

const achievements = [
  {
    date: "2025-01",
    title: "First Resistance Profile",
    description: "Constant resistance mode successfully generated programmable opposing force. Phase-based direction logic eliminated mid-rep oscillation.",
    metric: "Under £200 build cost",
  },
  {
    date: "2025-02",
    title: "Real-Time Dashboard",
    description: "Browser-based monitoring dashboard connected via WebSocket. Streams angle, velocity, current, and rep data at 10Hz with exercise history.",
    metric: "10Hz telemetry stream",
  },
  {
    date: "2025-02",
    title: "Backdrivability Achieved",
    description: "System moves freely when motors are unpowered. Critical safety requirement — the user is never locked into position by the mechanism.",
    metric: "Full passive mobility",
  },
  {
    date: "2025-03",
    title: "Isokinetic Mode Validated",
    description: "Velocity-controlled exercise mode showed genuine fatigue curves and successful resist-to-assist transitions during extended testing.",
    metric: "Fatigue detection working",
  },
  {
    date: "2025-03",
    title: "Gearbox Failure Analysis",
    description: "131:1 zinc spur gearbox failed twice under normal loads. Root cause analysis led to the v0.2 specification: 8:1 steel planetary gears.",
    metric: "22 Nm stall torque (v0.2)",
  },
  {
    date: "2025-03",
    title: "Safety Architecture Defined",
    description: "Dual-path kill switch design finalised. Mechanical relay provides physical air gap independent of microcontroller. No software in the safety path.",
    metric: "Zero software dependency",
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
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={eggsoLogo} alt="Eggso logo" className="h-8 w-auto" />
            <h1 className="font-display text-xl font-semibold tracking-tight">
              eggso
            </h1>
          </div>
          <span className="font-mono text-xs text-muted-foreground hidden sm:block">
            Adaptive Resistance Exoskeleton — Development Log
          </span>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 py-12 flex gap-16">
        <SideNav activeSection={activeSection} />

        <main className="flex-1 min-w-0">
          <HeroSection />
          <HowItWorksSection />
          <PrototypesSection />

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
              Key technical milestones reached during development.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {achievements.map((a) => (
                <AchievementCard key={a.title} {...a} />
              ))}
            </div>
          </section>

          {/* Design Principles */}
          <DesignPrinciplesSection />

          {/* Specs */}
          <section id="specs" className="mb-20">
            <h3 className="font-display text-lg font-semibold tracking-tight mb-2">
              Technical Specifications
            </h3>
            <p className="font-mono text-sm text-muted-foreground mb-8">
              Current and next-generation parameters.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <span className="font-mono text-xs text-muted-foreground block mb-2">v0.1 (Complete)</span>
                <div className="border border-border rounded-sm overflow-hidden">
                  {[
                    ["Motor", "DC Gear Motor (JGB37-520)"],
                    ["Gearbox", "131:1 Zinc Spur"],
                    ["Driver", "BTS7960 H-Bridge (43A)"],
                    ["Controller", "ESP32"],
                    ["Encoder", "External quadrature"],
                    ["Power", "12V 2A DC"],
                    ["Communication", "WebSocket + BLE"],
                    ["Frame", "Aluminium bars + velcro"],
                  ].map(([label, value], i) => (
                    <div
                      key={label}
                      className={`flex justify-between px-4 py-2.5 font-mono text-xs ${
                        i % 2 === 0 ? "bg-card" : "bg-secondary/50"
                      }`}
                    >
                      <span className="text-muted-foreground">{label}</span>
                      <span className="text-foreground font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="font-mono text-xs text-muted-foreground block mb-2">v0.2 (In Progress)</span>
                <div className="border border-border rounded-sm overflow-hidden">
                  {[
                    ["Motor", "BLDC (GIM8108-8)"],
                    ["Gearbox", "8:1 Steel Planetary"],
                    ["Peak Torque", "22 Nm stall / 7.5 Nm nom."],
                    ["Driver", "GDZ468H (CAN)"],
                    ["Encoder", "Built-in 12-bit (4096 CPR)"],
                    ["Power", "24V 8A DC"],
                    ["Communication", "CAN bus + WebSocket"],
                    ["Frame", "Medical elbow brace"],
                  ].map(([label, value], i) => (
                    <div
                      key={label}
                      className={`flex justify-between px-4 py-2.5 font-mono text-xs ${
                        i % 2 === 0 ? "bg-card" : "bg-secondary/50"
                      }`}
                    >
                      <span className="text-muted-foreground">{label}</span>
                      <span className="text-foreground font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Market Context */}
          <section id="market" className="mb-20">
            <h3 className="font-display text-lg font-semibold tracking-tight mb-2">
              Market Context
            </h3>
            <p className="font-mono text-sm text-muted-foreground mb-8 max-w-xl leading-relaxed">
              The rehabilitation robotics market is valued at $428M (2024) and growing
              at 15.2% CAGR, with upper extremity devices as the fastest-growing segment.
            </p>
            <div className="border border-border rounded-sm p-5">
              <p className="font-mono text-sm text-foreground leading-relaxed">
                A significant gap exists between clinical-grade systems costing £30,000+
                and basic resistance bands at £15. There is no intelligent, data-driven
                rehabilitation device in the £300–500 range. Eggso targets this gap —
                not the motor on a brace (that's commoditised), but the intelligence layer:
                adaptive resistance, real-time data, fatigue tracking, and objective
                progress measurement between sessions.
              </p>
              <p className="font-mono text-sm text-muted-foreground mt-3 leading-relaxed">
                Positioned as professional exercise equipment with data logging.
                Clinical judgement remains with the physiotherapist.
              </p>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-6 font-mono text-xs text-muted-foreground">
          Eggso — Development documentation. Work in progress.
        </div>
      </footer>
    </div>
  );
};

export default Index;
