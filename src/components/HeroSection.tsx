import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { heroData } from '../data';
import { triggerConfettiBurst, triggerFireworks } from '../utils/celebration';

interface HeroSectionProps {
  onOpenSurprise: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSurprise }) => {
  const handleSurpriseClick = () => {
    triggerConfettiBurst();
    triggerFireworks();
    onOpenSurprise();
  };

  return (
    <section id="home" className="relative flex items-center overflow-hidden px-6 pb-20 pt-36 sm:pt-32">
      {/* Ambient background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-rose-100/50 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-yellow-100/40 blur-2xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_1fr]">
        <div className="space-y-7 text-left">
          {/* Eyebrow badge */}
          <div className="inline-block rounded-full bg-gradient-gold px-5 py-2 shadow-gold animate-fade-in">
            <p className="break-words text-xs font-semibold uppercase tracking-[0.2em] text-gold-foreground flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{heroData.eyebrow}</span>
            </p>
          </div>

          {/* Heading */}
          <h1 className="break-words font-display text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
            A Day That's All About You!
          </h1>

          {/* Subtitle */}
          <p className="break-words max-w-xl text-lg leading-relaxed text-muted-foreground">
            You are the quiet strength behind every plan that comes together — the mentor who guides us, the friend who cheers for us, and the leader whose patience never runs out. Today we press pause on every checklist, because this day is all about you.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              onClick={handleSurpriseClick}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed shadow hover:bg-primary/90 py-2 pulse-soft h-14 rounded-full bg-gradient-gold px-8 text-base font-semibold text-gold-foreground shadow-gold transition duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              <span>{heroData.cta}</span>
            </button>

            <a
              href="#reasons"
              className="inline-flex items-center justify-center gap-2 h-14 rounded-full glass px-6 text-sm font-medium text-foreground hover:bg-white/90 transition duration-300 hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>Read Our Reasons</span>
            </a>
          </div>
        </div>

        {/* Arch Frame Portrait */}
        <div className="relative mx-auto w-full max-w-sm">
          {/* Glow backdrop */}
          <div
            aria-hidden="true"
            className="absolute -inset-5 -z-10 rounded-t-[15rem] rounded-b-[3.5rem] bg-secondary/60 blur-2xl"
          />

          <div className="rounded-t-[13rem] rounded-b-[2rem] border border-gold/50 bg-card p-3 shadow-soft transition-transform duration-500 hover:scale-[1.01]">
            <div className="overflow-hidden rounded-t-[11rem] rounded-b-[1.5rem] border-4 border-gold/60 relative group">
              <img
                src={heroData.portraitSrc}
                alt={heroData.portraitAlt}
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // Fallback if local path fails
                  (e.target as HTMLElement).setAttribute(
                    'src',
                    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
                  );
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          </div>

          {/* Identification pill badge */}
          <div className="glass relative z-10 mx-auto -mt-6 w-[94%] rounded-2xl px-4 py-3 text-center shadow-soft border border-gold/40">
            <p className="break-words font-display text-base italic text-foreground font-medium">
              {heroData.coordinatorBadge}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
