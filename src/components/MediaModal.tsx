import React, { useState } from 'react';
import { X, Play, Pause, Sparkles, Heart, MessageSquare } from 'lucide-react';
import { VideoMessage } from '../data';
import { triggerConfettiBurst } from '../utils/celebration';

interface MediaModalProps {
  message: VideoMessage | null;
  onClose: () => void;
}

export const MediaModal: React.FC<MediaModalProps> = ({ message, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
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
        className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-gold/40 text-left animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-black/5 transition-colors z-10"
          aria-label="Close message view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Member Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-gold text-gold-foreground font-display text-2xl font-bold shadow-gold">
            {message.name[0]}
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              {message.name}
            </h3>
            <span className="inline-block rounded-full bg-gold/30 px-3 py-0.5 text-xs font-semibold text-gold-deep border border-gold/40 mt-0.5">
              {message.role}
            </span>
          </div>
        </div>

        {/* Video / Visualizer Preview container */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 shadow-inner flex flex-col justify-between p-4 mb-6">
          {/* Animated soundwaves */}
          <div className="flex items-end justify-center gap-1.5 h-24 my-auto">
            {[40, 75, 50, 90, 60, 100, 45, 80, 65, 95, 30, 85, 55, 70].map((height, i) => (
              <div
                key={i}
                className="w-2 rounded-full bg-gradient-gold transition-all duration-300"
                style={{
                  height: isPlaying ? `${height}%` : '20%',
                  opacity: isPlaying ? 0.9 : 0.4,
                  animation: isPlaying ? `pulseGlow ${1.2 + (i % 5) * 0.2}s infinite` : 'none',
                }}
              />
            ))}
          </div>

          <div className="flex items-center justify-between text-white/80 text-xs px-2">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Voice Wish Recorded with Love</span>
            </span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 text-white font-medium flex items-center gap-1.5 transition-colors"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
          </div>
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
