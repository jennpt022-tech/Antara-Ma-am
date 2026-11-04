import React, { useState } from 'react';
import { survivalKitData, SurvivalKitItem } from '../data';
import { MemoryModal } from './MemoryModal';
import { triggerConfettiBurst } from '../utils/celebration';

export const SurvivalKitSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<SurvivalKitItem | null>(null);

  const handleItemClick = (item: SurvivalKitItem) => {
    triggerConfettiBurst();
    setSelectedItem(item);
  };

  return (
    <section id="kit" className="px-6 py-16 sm:py-24 relative">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl sm:mb-14 space-y-3 text-center">
          <h2 className="break-words font-display text-4xl text-foreground md:text-5xl">
            The Coordinator Survival Kit
          </h2>
          <p className="break-words text-muted-foreground">
            Everything that keeps our Chief running. Tap an item to open it.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {survivalKitData.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="inline-flex items-center justify-center gap-2 rounded-3xl text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 float-y group h-auto w-full whitespace-normal p-0 hover:bg-transparent sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] text-left"
              type="button"
              style={{ animationDelay: item.delay }}
            >
              <div className="glass flex h-full flex-col items-center gap-3 rounded-3xl p-8 text-center shadow-soft transition duration-300 group-hover:-rotate-1 group-hover:scale-[1.03] group-hover:shadow-gold w-full border border-gold/30">
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-2xl ${item.gradientClass} shadow-soft [transform:perspective(400px)_rotateX(8deg)] transition-transform duration-300 group-hover:scale-110`}
                >
                  <span className="text-5xl select-none">{item.icon}</span>
                </div>
                <h3 className="break-words font-display text-2xl text-foreground font-semibold">
                  {item.name}
                </h3>
                <p className="break-words text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
                <div className="mt-2 text-xs font-semibold text-gold-deep flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>Open memory</span>
                  <span>→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <MemoryModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};
