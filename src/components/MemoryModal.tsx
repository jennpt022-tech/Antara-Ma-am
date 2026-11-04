import React from 'react';
import { X, Sparkles, BookOpen } from 'lucide-react';
import { SurvivalKitItem } from '../data';

interface MemoryModalProps {
  item: SurvivalKitItem | null;
  onClose: () => void;
}

export const MemoryModal: React.FC<MemoryModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-gold/40 text-center animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-black/5 transition-colors"
          aria-label="Close memory modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Big Icon Banner */}
        <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-gold shadow-gold [transform:perspective(400px)_rotateX(6deg)]">
          <span className="text-6xl select-none">{item.icon}</span>
        </div>

        {/* Item Title */}
        <div className="inline-block px-3 py-1 mb-2 rounded-full bg-amber-50 border border-gold/30 text-xs font-semibold text-gold-foreground uppercase tracking-wider">
          Survival Kit Item #{item.id + 1}
        </div>
        <h3 className="font-display text-3xl font-bold text-foreground mb-2">
          {item.name}
        </h3>

        {/* Short description quote */}
        <p className="text-sm font-medium italic text-muted-foreground mb-6">
          {item.desc}
        </p>

        {/* Full Memory card */}
        <div className={`rounded-2xl p-6 text-left ${item.gradientClass} border border-gold/40 shadow-soft`}>
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-gold-deep">
            <BookOpen className="w-4 h-4" />
            <span>Behind the Scenes Memory</span>
          </div>
          <p className="font-display text-lg text-foreground leading-relaxed">
            {item.memory}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Sparkles className="w-3.5 h-3.5 text-gold-deep" />
          <span>Tap anywhere outside or press close to continue exploring</span>
        </div>
      </div>
    </div>
  );
};
