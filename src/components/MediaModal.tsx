import React, { useState } from 'react';
import { X, Heart, MessageSquare } from 'lucide-react';
import { VideoMessage } from '../data';
import { triggerConfettiBurst } from '../utils/celebration';

interface MediaModalProps {
  message: VideoMessage | null;
  onClose: () => void;
}

export const MediaModal: React.FC<MediaModalProps> = ({ message, onClose }) => {
  const [hasLiked, setHasLiked] = useState(false);

  if (!message) return null;

  const handleLike = () => {
    setHasLiked(!hasLiked);
    if (!hasLiked) {
      triggerConfettiBurst();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white p-5 sm:p-7 shadow-2xl border border-gold/40 text-left animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-black/5 transition-colors z-20"
          aria-label="Close message view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Member Header */}
        <div className="flex items-center gap-3.5 mb-5 pr-10">
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold text-gold-foreground font-display text-xl sm:text-2xl font-bold shadow-gold">
            {message.avatarText || message.name[0]}
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground truncate">
              {message.name}
            </h3>
            <span className="inline-block rounded-full bg-gold/30 px-3 py-0.5 text-xs font-semibold text-gold-deep border border-gold/40 mt-0.5 truncate max-w-full">
              {message.role}
            </span>
          </div>
        </div>

        {/* Video Player */}
        <div className="relative mx-auto mb-5 w-full overflow-hidden rounded-2xl bg-black border border-stone-800 shadow-lg">
          <video
            key={message.src}
            src={message.src}
            poster={message.poster}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="w-full max-h-[50vh] sm:max-h-[55vh] object-contain mx-auto bg-black"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Quote banner */}
        <div className="mb-4 p-4 rounded-2xl bg-amber-50/70 border border-gold/30">
          <p className="font-display italic text-lg text-foreground font-medium">
            {message.quote}
          </p>
        </div>

        {/* Full Written Message */}
        <div className="mb-6">
          <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Full Birthday Message</span>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            {message.fullMessage}
          </p>
        </div>

        {/* Actions Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              hasLiked
                ? 'bg-rose-50 text-rose-600 border border-rose-200 shadow-sm'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            <Heart className={`w-4 h-4 ${hasLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span>{hasLiked ? 'Sent Warmth! 💖' : 'Send Love 💛'}</span>
          </button>

          <span className="text-xs text-muted-foreground">
            From the Coordinator Team ✦
          </span>
        </div>
      </div>
    </div>
  );
};
