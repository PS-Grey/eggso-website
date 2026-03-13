import { cn } from "@/lib/utils";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "journey", label: "Journey" },
  { id: "roadmap", label: "Roadmap" },
  { id: "achievements", label: "Achievements" },
  { id: "specs", label: "Specs" },
];

interface SideNavProps {
  activeSection: string;
}

const SideNav = ({ activeSection }: SideNavProps) => {
  return (
    <nav className="hidden lg:flex flex-col gap-1 sticky top-8 w-48">
      <span className="font-display text-xs tracking-widest uppercase text-muted-foreground mb-4">
        Navigation
      </span>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={cn(
            "font-mono text-sm py-1.5 px-3 rounded-sm transition-colors duration-100",
            activeSection === section.id
              ? "text-primary bg-primary/5 border-l-2 border-primary"
              : "text-muted-foreground hover:text-foreground border-l-2 border-transparent"
          )}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
};

export default SideNav;
