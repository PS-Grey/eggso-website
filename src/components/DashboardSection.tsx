import { useRef, useState, useCallback } from "react";
import dashboardScreenshot from "@/assets/dashboard-v02.png";

const DashboardSection = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transformOrigin, setTransformOrigin] = useState("center center");

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  }, []);

  return (
    <section id="dashboard" className="mb-20">
      <h3 className="font-display text-lg font-semibold tracking-tight mb-2">
        Dashboard
      </h3>
      <p className="font-mono text-sm text-muted-foreground mb-8 max-w-xl leading-relaxed">
        A browser-based control interface for operating the device, collecting
        exercise data, and monitoring live system status.
      </p>

      <div className="border border-border rounded-sm p-5">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image with zoom effect */}
          <div
            ref={imgRef}
            className="md:w-1/2 overflow-hidden rounded-sm border border-border cursor-zoom-in shrink-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
          >
            <img
              src={dashboardScreenshot}
              alt="Eggso v0.2 dashboard showing calibration, motor control, telemetry, and exercise session data"
              className="w-full h-auto object-cover transition-transform duration-500 ease-out"
              style={{
                transform: isHovered ? "scale(1.8)" : "scale(1)",
                transformOrigin,
              }}
            />
          </div>

          {/* Descriptions on the right */}
          <div className="flex flex-col gap-5 md:w-1/2 justify-center">
            <div>
              <span className="font-mono text-xs text-muted-foreground block mb-1">Device control</span>
              <p className="font-mono text-xs text-foreground leading-relaxed">
                Motor direction, torque level, and calibration managed directly from the browser.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-muted-foreground block mb-1">Live telemetry</span>
              <p className="font-mono text-xs text-foreground leading-relaxed">
                Real-time angle, velocity, current, temperature, and bus voltage streamed over WebSocket.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-muted-foreground block mb-1">Exercise tracking</span>
              <p className="font-mono text-xs text-foreground leading-relaxed">
                Rep counting, duration, time under tension, peak current, and energy consumption per session.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-muted-foreground block mb-1">Overload engine</span>
              <p className="font-mono text-xs text-foreground leading-relaxed">
                Adaptive resistance that adjusts torque in real-time based on velocity ratio and movement phase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
