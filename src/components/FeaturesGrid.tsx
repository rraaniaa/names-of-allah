import { FeatureCard } from "./FeatureCard";
import { BookOpen, Compass, Moon, Sun, Bed, Star } from "lucide-react";

const features = [
  {
    arabicTitle: "أَسْمَاءُ اللَّهِ الْحُسْنَىٰ",
    title: "99 Noms d'Allah",
    description: "Explorez les beaux noms avec leurs invocations",
    icon: <Star className="w-6 h-6 text-primary" />,
    comingSoon: false,
  },
  {
    arabicTitle: "الْقُرْآنُ الْكَرِيمُ",
    title: "Coran Quotidien",
    description: "Lisez et méditez sur le Saint Coran",
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    comingSoon: false,
  },
  {
    arabicTitle: "أَذْكَارُ الصَّبَاحِ",
    title: "Adhkar du Matin",
    description: "Rappels du matin",
    icon: <Sun className="w-6 h-6 text-primary" />,
    comingSoon: true,
  },
  {
    arabicTitle: "أَذْكَارُ الْمَسَاءِ",
    title: "Adhkar du Soir",
    description: "Rappels du soir",
    icon: <Moon className="w-6 h-6 text-primary" />,
    comingSoon: true,
  },
  {
    arabicTitle: "أَذْكَارُ النَّوْمِ",
    title: "Avant le Sommeil",
    description: "Supplications avant de dormir",
    icon: <Bed className="w-6 h-6 text-primary" />,
    comingSoon: true,
  },
  {
    arabicTitle: "اتِّجَاهُ الْقِبْلَةِ",
    title: "Direction de la Qibla",
    description: "Trouvez la direction de la prière",
    icon: <Compass className="w-6 h-6 text-primary" />,
    comingSoon: false,
  },
];

export const FeaturesGrid = () => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-foreground text-center mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
        Explorer Plus
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            {...feature}
            delay={500 + index * 100}
          />
        ))}
      </div>
    </div>
  );
};
