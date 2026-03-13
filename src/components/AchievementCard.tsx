interface AchievementCardProps {
  date: string;
  title: string;
  description: string;
  metric?: string;
}

const AchievementCard = ({ date, title, description, metric }: AchievementCardProps) => {
  return (
    <div className="border border-border bg-card p-5 rounded-sm">
      <span className="font-mono text-xs text-muted-foreground">{date}</span>
      <h4 className="font-display text-base font-medium mt-1">{title}</h4>
      <p className="font-mono text-sm text-muted-foreground mt-2 leading-relaxed">
        {description}
      </p>
      {metric && (
        <div className="mt-3 pt-3 border-t border-border">
          <span className="font-mono text-xs text-primary">{metric}</span>
        </div>
      )}
    </div>
  );
};

export default AchievementCard;
