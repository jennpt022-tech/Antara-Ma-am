import React, { useState } from 'react';
import { galleryPhotos, GalleryPhoto } from '../data';
import { LightboxModal } from './LightboxModal';
import { triggerConfettiBurst } from '../utils/celebration';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const handlePhotoClick = (photo: GalleryPhoto) => {
    triggerConfettiBurst();
    setSelectedPhoto(photo);
  };

  return (
    <section id="gallery" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl sm:mb-14 space-y-3 text-center">
          <h2 className="break-words font-display text-4xl text-foreground md:text-5xl">
            Moments With Our Chief
          </h2>
          <p className="break-words text-muted-foreground">
            A few favourite memories from events, late nights and celebrations.
          </p>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryPhotos.map((photo) => (
            <div key={photo.id} className="mb-5 break-inside-avoid">
              <button
                onClick={() => handlePhotoClick(photo)}
                className="group relative block h-auto w-full overflow-hidden rounded-3xl p-0 shadow-soft cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 border border-gold/30"
                aria-label={`Open photo: ${photo.caption}`}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={photo.src}
                  alt={photo.caption}
                  className={`w-full object-cover transition duration-500 group-hover:scale-105 ${photo.aspectClass}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-40 group-hover:opacity-90 transition-opacity duration-300" />
                <span className="glass-gold absolute bottom-3 left-3 right-auto rounded-full px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-md transition-all duration-300 transform group-hover:scale-105 border border-gold/50 backdrop-blur-md">
                  ✦ {photo.caption}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <LightboxModal
        photo={selectedPhoto}
        photos={galleryPhotos}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={setSelectedPhoto}
      />
    </section>
  );
};
