import React, { useState } from 'react';
import { X, Sparkles, Volume2, Flame, RotateCcw } from 'lucide-react';
import { triggerConfettiBurst, triggerFireworks, playChimeSound } from '../utils/celebration';

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SurpriseModal: React.FC<SurpriseModalProps> = ({ isOpen, onClose }) => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [wishMade, setWishMade] = useState(false);

  if (!isOpen) return null;

  const handleBlowCandles = () => {
    setCandlesBlown(true);
    setWishMade(true);
    triggerFireworks();
    triggerConfettiBurst();
    playChimeSound();
  };

  const handleRelight = () => {
    setCandlesBlown(false);
    setWishMade(false);
    triggerConfettiBurst();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-10 shadow-2xl border border-gold/50 text-center animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-black/5 transition-colors"
          aria-label="Close surprise modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-gold text-gold-foreground text-xs font-semibold uppercase tracking-wider mb-4 shadow-gold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Special Birthday Moment</span>
        </div>

        <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
          Happy Birthday, Dr. Antara Sonawane!
        </h3>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
          May this year bring you boundless happiness, seamless triumphs, and all the love you so generously give to everyone around you!
        </p>

        {/* Interactive Birthday Cake Illustration */}
        <div className="relative my-6 mx-auto w-48 h-44 flex flex-col items-center justify-end select-none">
          {/* Candles */}
          <div className="flex gap-4 mb-1">
            {[1, 2, 3].map((candleIndex) => (
              <div key={candleIndex} className="flex flex-col items-center">
                {/* Flame */}
                <div
                  className={`w-3 h-5 rounded-full bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-200 transition-all duration-500 ${
                    candlesBlown
                      ? 'scale-0 opacity-0'
                      : 'animate-pulse scale-100 shadow-[0_0_12px_rgba(251,191,36,0.9)]'
                  }`}
                />
                {/* Wick & Candle Body */}
                <div className="w-0.5 h-1.5 bg-stone-700" />
                <div className="w-2.5 h-8 bg-gradient-to-b from-rose-200 to-amber-100 rounded-t-sm border border-gold/30" />
              </div>
            ))}
          </div>

          {/* Top Layer */}
          <div className="w-32 h-10 bg-gradient-cream rounded-t-2xl border-2 border-gold/50 shadow-sm flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-blush opacity-80" />
            <span className="text-xs font-semibold text-gold-deep tracking-widest font-sans uppercase">
              ✦ Make a Wish ✦
            </span>
          </div>

          {/* Bottom Cake Layer */}
          <div className="w-44 h-14 bg-gradient-butter rounded-b-2xl border-2 border-t-0 border-gold/60 shadow-soft flex items-center justify-around px-4 relative">
            <span className="text-xl">🍓</span>
            <span className="text-xl">✨</span>
            <span className="text-xl">🍓</span>
          </div>

          {/* Plate */}
          <div className="w-52 h-3 bg-gradient-gold rounded-full shadow-gold -mt-1" />
        </div>

        {/* Interactive Candle Action */}
        <div className="my-6">
          {!candlesBlown ? (
            <button
              onClick={handleBlowCandles}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-gold text-gold-foreground font-semibold text-base shadow-gold pulse-soft hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
            >
              <Flame className="w-5 h-5 text-gold-deep" />
              <span>Tap to Blow Out Candles & Make a Wish! 🕯️</span>
            </button>
          ) : (
            <div className="space-y-4 animate-fade-in">
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-gold/40 text-gold-foreground text-sm font-medium">
                🎉 Your wish has been sent to the universe! May it all come true! ✨
              </div>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={handleRelight}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-stone-200 hover:bg-stone-50 text-xs font-semibold text-muted-foreground transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Light Candles Again</span>
                </button>
                <button
                  onClick={() => {
                    triggerFireworks();
                    playChimeSound();
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-gold text-gold-foreground text-xs font-semibold shadow-gold hover:-translate-y-0.5 transition-transform"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>More Confetti!</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Audio chime trigger */}
        <div className="pt-4 border-t border-border flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Volume2 className="w-3.5 h-3.5 text-gold-deep cursor-pointer" onClick={playChimeSound} />
          <span>Sound effects enabled • Celebrate in harmony!</span>
        </div>
      </div>
    </div>
  );
};
