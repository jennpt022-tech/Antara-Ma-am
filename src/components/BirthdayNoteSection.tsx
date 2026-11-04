import React, { useState, useEffect } from 'react';
import { Heart, Send, Sparkles, UserCheck } from 'lucide-react';
import { birthdayNote } from '../data';
import { triggerConfettiBurst, triggerFireworks } from '../utils/celebration';

interface SignedWish {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  emoji: string;
}

const DEFAULT_WISHES: SignedWish[] = [
  {
    id: 'w-1',
    name: 'JD',
    message: 'To the best Chief ever—thank you for making every challenge feel like an adventure! 💛',
    timestamp: 'Just now',
    emoji: '🎉',
  },
  {
    id: 'w-2',
    name: 'Amol Sir',
    message: 'Wishing you endless joy, health, and flawless event milestones! Extra coffee today! ☕✨',
    timestamp: '10m ago',
    emoji: '☕',
  },
  {
    id: 'w-3',
    name: 'Core Coordinator Committee',
    message: 'Happy Birthday Dr. Antara Sonawane! We promise to follow all protocols today without a single follow-up! 🌟',
    timestamp: '30m ago',
    emoji: '💐',
  },
];

export const BirthdayNoteSection: React.FC = () => {
  const [wishes, setWishes] = useState<SignedWish[]>(() => {
    try {
      const saved = localStorage.getItem('chief_birthday_wishes');
      return saved ? JSON.parse(saved) : DEFAULT_WISHES;
    } catch {
      return DEFAULT_WISHES;
    }
  });

  const [nameInput, setNameInput] = useState('');
  const [msgInput, setMsgInput] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('💛');

  const emojis = ['💛', '🎉', '🌟', '💐', '🎂', '👏', '✨'];

  useEffect(() => {
    try {
      localStorage.setItem('chief_birthday_wishes', JSON.stringify(wishes));
    } catch {
      // storage quota or private browsing
    }
  }, [wishes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim() || !msgInput.trim()) return;

    const newWish: SignedWish = {
      id: `wish-${Date.now()}`,
      name: nameInput.trim(),
      message: msgInput.trim(),
      timestamp: 'Just now',
      emoji: selectedEmoji,
    };

    setWishes([newWish, ...wishes]);
    setNameInput('');
    setMsgInput('');
    triggerConfettiBurst();
    triggerFireworks();
  };

  return (
    <section id="birthday-note" className="border-t border-border bg-secondary/50 px-6 pb-24 pt-16 sm:pt-24">
      {/* Heartfelt Note */}
      <div className="mx-auto max-w-2xl space-y-6 text-center">
        <div className="inline-flex p-3 rounded-full bg-amber-100/60 text-gold-deep mb-2 shadow-sm animate-bounce">
          <Heart className="h-7 w-7 text-gold-deep fill-gold-deep" />
        </div>

        <h2 className="break-words font-display text-4xl text-foreground md:text-5xl font-semibold">
          {birthdayNote.title}
        </h2>

        <p className="break-words text-base leading-loose text-muted-foreground sm:text-lg">
          {birthdayNote.message}
        </p>

        <p className="break-words font-display text-2xl italic text-foreground font-medium pt-2">
          {birthdayNote.signoff}
        </p>
      </div>

      {/* Interactive Birthday Guestbook Card */}
      <div className="mx-auto max-w-3xl mt-16 rounded-3xl glass p-6 sm:p-10 shadow-soft border border-gold/40">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 text-gold-deep text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Team Board</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Sign the Birthday Card for Dr. Antara Sonawane
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Leave your own birthday wish, memory, or cheer for our Chief Coordinator!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-10">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name-input" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                Your Name & Role
              </label>
              <input
                id="name-input"
                type="text"
                placeholder="e.g. Shruti (Stage Coordinator)"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-white/90 text-foreground placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-gold/60 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                Choose an Emoji Badge
              </label>
              <div className="flex items-center gap-1.5 bg-white/80 p-1.5 rounded-xl border border-stone-200">
                {emojis.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => setSelectedEmoji(emoji)}
                    className={`flex-1 py-1 rounded-lg text-lg transition-transform ${
                      selectedEmoji === emoji ? 'bg-amber-100 scale-110 shadow-sm' : 'hover:bg-stone-100'
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="msg-input" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
              Your Birthday Message
            </label>
            <textarea
              id="msg-input"
              rows={3}
              placeholder="Write a sweet message, event memory, or cheer..."
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-white/90 text-foreground placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-gold/60 text-sm resize-none"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-gold-foreground font-semibold text-sm shadow-gold hover:-translate-y-0.5 active:scale-95 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Post Your Wish ✨</span>
            </button>
          </div>
        </form>

        {/* Existing wishes list */}
        <div className="space-y-3 pt-6 border-t border-border">
          <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-gold-deep" />
              <span>Team Wishes ({wishes.length})</span>
            </span>
            <span className="text-gold-deep">Live Guestbook</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {wishes.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl p-4 bg-white/90 border border-stone-100 shadow-sm text-left hover:border-gold/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{item.emoji}</span>
                    <span className="font-display font-semibold text-foreground text-sm">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-muted-foreground/80">
                    {item.timestamp}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
