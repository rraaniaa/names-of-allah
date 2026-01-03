import { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DuaSearch = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      console.log("Searching for:", query);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
      <div className="bg-card rounded-2xl p-6 shadow-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Dua Personnalisée</h3>
            <p className="text-sm text-muted-foreground">Générateur de supplications IA</p>
          </div>
        </div>
        
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Décrivez votre situation pour trouver les noms appropriés..."
            className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 pr-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        </div>
        
        <Button
          onClick={handleSearch}
          className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-3 font-medium transition-all duration-200 hover:shadow-soft"
        >
          Trouver les Meilleurs Noms
        </Button>
      </div>
    </div>
  );
};
