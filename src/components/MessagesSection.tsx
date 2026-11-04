import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { videoMessages, VideoMessage } from '../data';
import { MediaModal } from './MediaModal';
import { triggerConfettiBurst } from '../utils/celebration';

// Beautiful stylized portrait avatars/backgrounds for each team member
const memberThumbnails = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80', // Ananya
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80', // Rahul
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80', // Meera
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80', // Priya
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80', // Karan
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80', // Sneha
];

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
            Six little wishes, one big celebration — with love from all of us.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videoMessages.map((msg, index) => (
            <div key={msg.id}>
              <button
                onClick={() => handleMessageClick(msg)}
                className="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 group relative block aspect-[9/16] h-auto w-full overflow-hidden rounded-[2rem] bg-stone-900 p-0 shadow-soft text-left border border-gold/30"
                aria-label={`Play video wish from ${msg.name}`}
              >
                {/* Poster image background */}
                <img
                  src={memberThumbnails[index % memberThumbnails.length]}
                  alt={`${msg.name} - ${msg.role}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105 opacity-90"
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
