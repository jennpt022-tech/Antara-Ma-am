import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ReasonsSection } from './components/ReasonsSection';
import { SurvivalKitSection } from './components/SurvivalKitSection';
import { GallerySection } from './components/GallerySection';
import { MessagesSection } from './components/MessagesSection';
import { BirthdayNoteSection } from './components/BirthdayNoteSection';
import { SurpriseModal } from './components/SurpriseModal';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { triggerConfettiBurst } from './utils/celebration';

export default function App() {
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Initial welcome confetti burst on load
    const timer = setTimeout(() => {
      triggerConfettiBurst();
    }, 600);

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    triggerConfettiBurst();
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-gold selection:text-gold-foreground">
      {/* Floating Header Navbar */}
      <Navbar onOpenSurprise={() => setIsSurpriseOpen(true)} />

      {/* Main Sections */}
      <main className="min-h-screen">
        <HeroSection onOpenSurprise={() => setIsSurpriseOpen(true)} />
        <ReasonsSection />
        <SurvivalKitSection />
        <GallerySection />
        <MessagesSection />
        <BirthdayNoteSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/80 bg-white/60 py-10 px-6 text-center text-xs text-muted-foreground">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-display text-sm italic text-foreground flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold-deep" />
            <span>Honoring Our Chief Coordinator • Dr. Antara Sonawane</span>
          </div>

          <div className="flex items-center gap-1 text-muted-foreground">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>by the Entire Coordinator Team</span>
          </div>
        </div>
      </footer>

      {/* Floating Back-to-Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white/90 text-foreground shadow-soft border border-gold/40 hover:bg-white hover:shadow-gold transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center animate-fade-in"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 text-gold-deep" />
        </button>
      )}

      {/* Surprise Birthday Modal */}
      <SurpriseModal
        isOpen={isSurpriseOpen}
        onClose={() => setIsSurpriseOpen(false)}
      />
    </div>
  );
}
