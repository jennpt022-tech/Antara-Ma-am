import React, { useState } from 'react';
import { reasonsData } from '../data';
import { triggerConfettiBurst } from '../utils/celebration';

export const ReasonsSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [tappedCard, setTappedCard] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleToggleTap = (id: number) => {
    setTappedCard((prev) => (prev === id ? null : id));
    triggerConfettiBurst();
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
            const isFlipped = hoveredCard === item.id || tappedCard === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleToggleTap(item.id)}
                className="inline-flex items-center justify-center gap-2 rounded-3xl text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 flip group h-72 w-full whitespace-normal p-0 text-left hover:bg-transparent [perspective:1200px]"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleToggleTap(item.id);
                  }
                }}
                aria-label={`${item.title} - ${item.back}`}
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
                  </div>

                  {/* Card Back */}
                  <div
                    className={`${item.gradientClass} absolute inset-0 flex flex-col items-center justify-center rounded-3xl p-8 text-center shadow-soft [backface-visibility:hidden] [transform:rotateY(180deg)] border border-gold/40`}
                  >
                    <p className="break-words font-display text-xl italic leading-snug text-foreground">
                      “{item.back}”
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
