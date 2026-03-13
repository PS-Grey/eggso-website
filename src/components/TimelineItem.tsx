import { cn } from "@/lib/utils";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  status: "done" | "current" | "upcoming";
}

const TimelineItem = ({ date, title, description, status }: TimelineItemProps) => {
  return (
    <div className="flex gap-6 group">
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "w-3 h-3 rounded-full border-2 mt-1.5 shrink-0",
            status === "done" && "bg-primary border-primary",
            status === "current" && "bg-background border-primary",
            status === "upcoming" && "bg-background border-border"
          )}
        />
        <div className="w-px flex-1 bg-border" />
      </div>

      {/* Content */}
      <div className="pb-10">
        <span className="font-mono text-xs text-muted-foreground">{date}</span>
        <h4
          className={cn(
            "font-display text-base font-medium mt-0.5",
            status === "upcoming" ? "text-muted-foreground" : "text-foreground"
          )}
        >
          {title}
        </h4>
        <p className="font-mono text-sm text-muted-foreground mt-1 leading-relaxed max-w-md">
          {description}
        </p>
        {status === "current" && (
          <span className="inline-block mt-2 font-mono text-xs text-primary bg-primary/5 px-2 py-0.5 rounded">
            in progress
          </span>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
