import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Heart } from "lucide-react";
import { allahNames, searchNames } from "@/data/allahNames";

const NamesPage = () => {
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredNames = query ? searchNames(query) : allahNames;

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link 
              to="/" 
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-muted-foreground" />
            </Link>
            
            <div className="text-center">
              <h1 className="font-arabic text-2xl text-primary">أَسْمَاءُ اللَّهِ الْحُسْنَى</h1>
              <p className="text-sm text-muted-foreground">99 Names of Allah</p>
            </div>
            
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors">
              <Heart className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, meaning..."
              className="w-full bg-secondary/50 border border-border rounded-xl pl-10 pr-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
            />
          </div>
        </div>
      </header>

      {/* Names Grid */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredNames.map((name) => (
            <Link
              key={name.id}
              to={`/name/${name.id - 1}`}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs text-muted-foreground">{name.id}</span>
                <button
                  onClick={(e) => toggleFavorite(name.id, e)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart 
                    className={`w-4 h-4 ${favorites.includes(name.id) ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
                  />
                </button>
              </div>
              
              <div className="text-center">
                <h2 className="font-arabic text-3xl text-primary mb-2">{name.arabic}</h2>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {name.transliteration}
                </p>
                <p className="text-sm font-medium text-foreground">{name.meaning}</p>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredNames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No names found matching "{query}"</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default NamesPage;
