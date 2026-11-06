import React from 'react';
import { Heart } from 'lucide-react';
import { birthdayNote } from '../data';

export const BirthdayNoteSection: React.FC = () => {
  return (
    <section id="birthday-note" className="border-t border-border bg-secondary/50 px-6 pb-32 pt-16 sm:pt-24">
      <div className="mx-auto max-w-2xl space-y-6 text-center">
        <Heart className="mx-auto h-7 w-7 text-gold-deep" />
        <h2 className="break-words font-display text-4xl text-foreground md:text-5xl">
          {birthdayNote.title}
        </h2>
        <p className="break-words text-base leading-loose text-muted-foreground sm:text-lg">
          {birthdayNote.message}
        </p>
        <p className="break-words font-display text-2xl italic text-foreground">
          {birthdayNote.signoff}
        </p>
      </div>
    </section>
  );
};
