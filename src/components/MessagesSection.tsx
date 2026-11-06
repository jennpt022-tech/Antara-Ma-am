import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { videoMessages, VideoMessage } from '../data';
import { MediaModal } from './MediaModal';
import { triggerConfettiBurst } from '../utils/celebration';

export const MessagesSection: React.FC = () => {
  const [selectedMessage, setSelectedMessage] = useState<VideoMessage | null>(null);

  const handleMessageClick = (msg: VideoMessage) => {
    triggerConfettiBurst();
    setSelectedMessage(msg);
  };

  return (
    <section id="messages" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl sm:mb-14 space-y-3 text-center">
          <h2 className="break-words font-display text-4xl text-foreground md:text-5xl">
            Messages From the Team
          </h2>
          <p className="break-words text-muted-foreground">
            Six heartfelt video wishes, one big celebration — with love from all of us.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videoMessages.map((msg) => (
            <div key={msg.id}>
              <button
                onClick={() => handleMessageClick(msg)}
                className="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 group relative block aspect-[9/16] h-auto w-full overflow-hidden rounded-[2rem] bg-stone-900 p-0 shadow-soft text-left border border-gold/30"
                aria-label={`Play video wish from ${msg.name}`}
              >
                {/* Poster image background */}
                <img
                  src={msg.poster}
                  alt={`${msg.name} - ${msg.role}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105 opacity-95"
                />

                {/* Gradient shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-black/30" />

                {/* Floating Play Button */}
                <span className="glass absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-foreground shadow-lg transition duration-300 group-hover:scale-115 group-hover:bg-white group-hover:shadow-gold">
                  <Play className="ml-1 h-6 w-6 text-foreground fill-foreground/20" />
                </span>

                {/* Top Quote pill */}
                <div className="absolute top-4 left-4 right-4">
                  <span className="glass inline-block rounded-full px-3 py-1 text-xs font-medium text-foreground max-w-full truncate shadow-sm">
                    {msg.quote}
                  </span>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-5 left-5 right-5 text-left">
                  <div className="font-display whitespace-normal text-2xl text-white font-semibold tracking-wide">
                    {msg.name}
                  </div>
                  <span className="mt-1 inline-block max-w-full whitespace-normal rounded-full bg-gold px-3 py-0.5 text-xs font-semibold text-gold-foreground shadow-sm">
                    {msg.role}
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <MediaModal
        message={selectedMessage}
        onClose={() => setSelectedMessage(null)}
      />
    </section>
  );
};
