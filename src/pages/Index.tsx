import { Hero } from "@/components/Hero";
import { DuaSearch } from "@/components/DuaSearch";
import { FeaturesGrid } from "@/components/FeaturesGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>
      
      <main className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <Hero />
        <DuaSearch />
        <FeaturesGrid />
        
        {/* Footer */}
        <footer className="mt-20 text-center opacity-0 animate-fade-in" style={{ animationDelay: "1200ms" }}>
          <p className="text-muted-foreground text-sm">
            © 2024 Ressources Islamiques. Avec amour pour la Oumma.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
