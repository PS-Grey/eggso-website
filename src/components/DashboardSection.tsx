import dashboardScreenshot from "@/assets/dashboard-v02.png";

const DashboardSection = () => {
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
        <img
          src={dashboardScreenshot}
          alt="Eggso v0.2 dashboard showing calibration, motor control, telemetry, and exercise session data"
          className="rounded-sm border border-border w-full mb-4"
        />
        <div className="grid gap-4 sm:grid-cols-3">
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
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
