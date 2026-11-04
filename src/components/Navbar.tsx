import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { triggerConfettiBurst } from '../utils/celebration';

interface NavbarProps {
  onOpenSurprise: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSurprise }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'reasons', 'kit', 'gallery', 'messages', 'birthday-note'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'reasons', label: 'Reasons' },
    { id: 'kit', label: 'Survival Kit' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'messages', label: 'Messages' },
  ];

  return (
    <nav
      aria-label="Birthday sections"
      className="fixed inset-x-0 top-3 z-40 mx-auto grid w-[min(94%,56rem)] min-w-0 gap-1 rounded-3xl glass px-3 py-2 shadow-soft sm:flex sm:items-center sm:justify-between sm:gap-4 sm:rounded-full sm:px-5 transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <a
          href="#home"
          onClick={() => triggerConfettiBurst()}
          className="min-w-0 px-2 font-display text-lg italic text-foreground sm:px-0 hover:text-gold-deep transition-colors flex items-center gap-1.5"
        >
          <span className="break-words font-semibold">For Our Chief ✦</span>
        </a>

        {/* Mobile quick surprise trigger */}
        <button
          onClick={onOpenSurprise}
          className="sm:hidden text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-gold text-gold-foreground flex items-center gap-1 shadow-gold active:scale-95"
          title="Open Surprise"
        >
          <Sparkles className="w-3 h-3 text-gold-deep" />
          <span>Surprise!</span>
        </button>
      </div>

      <div className="flex min-w-0 gap-0.5 overflow-x-auto text-xs sm:gap-1 sm:text-sm no-scrollbar py-0.5">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={isActive ? 'location' : undefined}
              className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 transition-all duration-200 font-medium ${
                isActive
                  ? 'bg-gold text-gold-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-black/5'
              }`}
            >
              {link.label}
            </a>
          );
        })}

        <button
          onClick={onOpenSurprise}
          className="hidden sm:inline-flex items-center gap-1 shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 bg-gradient-gold text-gold-foreground text-xs font-semibold shadow-gold hover:-translate-y-0.5 transition-transform"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Surprise</span>
        </button>
      </div>
    </nav>
  );
};
