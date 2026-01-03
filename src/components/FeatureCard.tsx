import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  arabicTitle: string;
  title: string;
  description: string;
  icon?: ReactNode;
  comingSoon?: boolean;
  onClick?: () => void;
  delay?: number;
}

export const FeatureCard = ({
  arabicTitle,
  title,
  description,
  icon,
  comingSoon = false,
  onClick,
  delay = 0,
}: FeatureCardProps) => {
  return (
    <div
      onClick={onClick}
      style={{ animationDelay: `${delay}ms` }}
      className={cn(
        "group relative bg-card rounded-2xl p-6 shadow-card transition-all duration-300 cursor-pointer opacity-0 animate-fade-in",
        "hover:shadow-hover hover:-translate-y-1",
        comingSoon && "opacity-70"
      )}
    >
      {comingSoon && (
        <span className="absolute top-4 right-4 text-xs font-medium bg-accent text-accent-foreground px-3 py-1 rounded-full">
          Bientôt
        </span>
      )}
      
      <div className="mb-4">
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
        
        <h3 className="font-arabic text-2xl text-primary mb-1 leading-relaxed">
          {arabicTitle}
        </h3>
        
        <h4 className="text-lg font-semibold text-foreground mb-2">
          {title}
        </h4>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};
