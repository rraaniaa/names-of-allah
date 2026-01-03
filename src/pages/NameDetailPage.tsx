import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Menu, Heart, ChevronDown, ChevronLeft, ChevronRight, Sparkles, Send } from "lucide-react";
import { getNameById, allahNames } from "@/data/allahNames";
import { Button } from "@/components/ui/button";

const NameDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const nameIndex = parseInt(id || "0");
  const name = getNameById(nameIndex + 1);
  
  const [showAuthenticDuas, setShowAuthenticDuas] = useState(false);
  const [situation, setSituation] = useState("");
  const [generatedDua, setGeneratedDua] = useState<{
    arabic: string;
    transliteration: string;
    translation: string;
  } | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!name) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Name not found</p>
          <Link to="/names" className="text-primary hover:underline">
            Back to names
          </Link>
        </div>
      </div>
    );
  }

  const progress = ((nameIndex + 1) / 99) * 100;

  const goToPrevious = () => {
    if (nameIndex > 0) {
      navigate(`/name/${nameIndex - 1}`);
    }
  };

  const goToNext = () => {
    if (nameIndex < 98) {
      navigate(`/name/${nameIndex + 1}`);
    }
  };

  const handleGenerateDua = async () => {
    if (!situation.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation (will be replaced with actual AI call)
    setTimeout(() => {
      setGeneratedDua({
        arabic: `يَا أَرْحَمَ الرَّاحِمِينَ، ارْحَمْ ضَعْفِي وَحَاجَتِي، وَارْزُقْنِي مِنْ فَضْلِكَ وَكَرَمِكَ الْوَاسِعِ رِزْقًا حَلَالًا طَيِّبًا مُبَارَكًا فِيهِ`,
        transliteration: `Ya Arhamar-Rahimin, irham da'fi wa hajati, warzuqni min fadlika wa karamikal-wasi'i rizqan halalan tayyiban mubarakan fih`,
        translation: `Oh Most Merciful of the merciful, have mercy on my weakness and my need, and provide for me from Your vast favor and generosity a lawful, pure, and blessed provision`
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Progress */}
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          {/* Progress indicator */}
          <div className="flex items-center justify-between py-2 text-sm">
            <span className="text-foreground font-medium">{nameIndex + 1} / 99</span>
            <span className="text-primary">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1 bg-secondary rounded-full mb-2 overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-2">
              <Link
                to="/names"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Menu className="w-5 h-5 text-muted-foreground" />
              </Link>
              <Link
                to="/"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-muted-foreground" />
              </Link>
            </div>
            
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Name Card */}
        <div className="bg-gradient-to-br from-primary/5 to-accent rounded-3xl p-8 mb-6 text-center relative">
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-4 right-4"
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
          </button>
          
          <h1 className="font-arabic text-5xl md:text-6xl text-primary mb-4">{name.arabic}</h1>
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">
            {name.transliteration}
          </p>
          <p className="text-xl font-semibold text-foreground">{name.meaning}</p>
        </div>

        {/* Explanation */}
        <div className="bg-card rounded-2xl p-6 mb-4 border border-border">
          <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            Explanation
          </h3>
          <p className="text-foreground leading-relaxed">{name.explanation}</p>
        </div>

        {/* Invocation */}
        <div className="bg-card rounded-2xl p-6 mb-4 border border-border">
          <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Invocation
          </h3>
          <p className="font-arabic text-2xl text-foreground text-right leading-loose mb-4">
            {name.invocation.arabic}
          </p>
          <p className="text-sm text-muted-foreground italic mb-2">
            {name.invocation.transliteration}
          </p>
          <p className="text-foreground">
            {name.invocation.translation}
          </p>
          
          {/* Authentic Duas Toggle */}
          {name.authenticDuas && name.authenticDuas.length > 0 && (
            <button
              onClick={() => setShowAuthenticDuas(!showAuthenticDuas)}
              className="flex items-center gap-2 text-primary mt-4 hover:underline"
            >
              <ChevronDown className={`w-4 h-4 transition-transform ${showAuthenticDuas ? 'rotate-180' : ''}`} />
              View Authentic Duas
            </button>
          )}
          
          {showAuthenticDuas && name.authenticDuas && (
            <div className="mt-4 pt-4 border-t border-border space-y-4">
              {name.authenticDuas.map((dua, index) => (
                <div key={index} className="bg-secondary/30 rounded-xl p-4">
                  <p className="font-arabic text-xl text-foreground text-right leading-loose mb-3">
                    {dua.arabic}
                  </p>
                  <p className="text-sm text-muted-foreground italic mb-2">
                    {dua.transliteration}
                  </p>
                  <p className="text-foreground mb-2">{dua.translation}</p>
                  <p className="text-xs text-primary font-medium">📚 {dua.source}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Personal Dua Generator */}
        <div className="bg-card rounded-2xl p-6 mb-6 border border-border">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-primary" />
            <h3 className="text-xs font-semibold text-primary uppercase tracking-wider">
              Personal Dua Generator
            </h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Going through something specific? Describe your situation below, and receive a personalized Dua invoking Allah as <span className="text-primary font-medium">{name.transliteration}</span>.
          </p>
          
          <div className="relative mb-4">
            <textarea
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
              placeholder="e.g., I am feeling anxious about my exam results and need peace..."
              className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 pr-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 resize-none min-h-[80px]"
            />
            <button
              onClick={handleGenerateDua}
              disabled={isGenerating || !situation.trim()}
              className="absolute right-3 bottom-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
            >
              <Send className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
          
          {isGenerating && (
            <div className="text-center py-4">
              <div className="inline-block w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-sm text-muted-foreground mt-2">Generating your personalized dua...</p>
            </div>
          )}
          
          {generatedDua && !isGenerating && (
            <div className="bg-accent/30 rounded-xl p-4 border border-primary/20">
              <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                Your Personalized Dua
              </h4>
              <p className="font-arabic text-xl text-foreground text-right leading-loose mb-3">
                {generatedDua.arabic}
              </p>
              <p className="text-sm text-muted-foreground italic mb-2">
                {generatedDua.transliteration}
              </p>
              <p className="text-foreground">{generatedDua.translation}</p>
            </div>
          )}
        </div>

        {/* Start Dhikr Button */}
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 font-medium text-lg"
        >
          Start Dhikr
        </Button>

        {/* Navigation Arrows */}
        <div className="fixed bottom-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none">
          <button
            onClick={goToPrevious}
            disabled={nameIndex === 0}
            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30 pointer-events-auto"
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </button>
          <button
            onClick={goToNext}
            disabled={nameIndex === 98}
            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30 pointer-events-auto"
          >
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-1 py-6">
          {[0, 1, 2, 3].map((dot) => (
            <div
              key={dot}
              className={`w-2 h-2 rounded-full ${
                dot === 0 ? 'w-6 bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default NameDetailPage;
