import React, { useState } from 'react';
import { reasonsData } from '../data';
import { triggerConfettiBurst } from '../utils/celebration';

export const ReasonsSection: React.FC = () => {
  // Track which card is flipped
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) => {
      const nextState = !prev[id];
      if (nextState) {
        triggerConfettiBurst();
      }
      return { ...prev, [id]: nextState };
    });
  };

  return (
    <section id="reasons" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl sm:mb-14 space-y-3 text-center">
          <h2 className="break-words font-display text-4xl text-foreground md:text-5xl">
            Reasons She's the Best Chief Coordinator
          </h2>
          <p className="break-words text-muted-foreground">
            Just a few of the countless reasons we adore working with her.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasonsData.map((item) => {
            const isFlipped = !!flippedCards[item.id];

            return (
              <button
                key={item.id}
                onClick={() => toggleFlip(item.id)}
                className="inline-flex items-center justify-center gap-2 rounded-3xl text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 flip group h-72 w-full whitespace-normal p-0 text-left hover:bg-transparent [perspective:1200px]"
                aria-pressed={isFlipped}
                type="button"
              >
                <div
                  className={`flip-inner relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
                    isFlipped ? 'is-flipped' : ''
                  }`}
                >
                  {/* Card Front */}
                  <div className="glass absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-3xl p-6 text-center shadow-soft [backface-visibility:hidden] transition-shadow duration-300 group-hover:shadow-card-hover border border-gold/30">
                    <span className="break-words text-5xl select-none transform transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </span>
                    <h3 className="break-words font-display text-2xl text-foreground font-semibold">
                      {item.title}
                    </h3>
                    <span className="text-xs text-muted-foreground/70 font-sans tracking-wide uppercase mt-1 px-3 py-1 rounded-full bg-amber-50/60 border border-gold/20">
                      Tap to reveal ✦
                    </span>
                  </div>

                  {/* Card Back */}
                  <div
                    className={`${item.gradientClass} absolute inset-0 flex flex-col items-center justify-center rounded-3xl p-8 text-center shadow-soft [backface-visibility:hidden] [transform:rotateY(180deg)] border border-gold/40`}
                  >
                    <p className="break-words font-display text-xl italic leading-snug text-foreground">
                      “{item.back}”
                    </p>
                    <span className="text-xs text-muted-foreground/70 font-sans uppercase tracking-wider mt-4">
                      Tap to flip back ↺
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
