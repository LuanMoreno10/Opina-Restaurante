import { useState } from "react";
import { menuPhotos } from "../data/menuPhotos";
import Lightbox from "./Lightbox";

export default function MenuGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:-mx-8 sm:px-8">
        {menuPhotos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Ampliar: ${photo.alt}`}
            className="group relative aspect-[640/905] w-[62vw] shrink-0 snap-start overflow-hidden rounded-xl border border-hairline bg-surface transition-transform hover:-translate-y-0.5 sm:w-[220px]"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/25 group-hover:opacity-100">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink">
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <circle cx="8.5" cy="8.5" r="5.5" />
                  <path d="M16 16l-3.2-3.2" strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </button>
        ))}
      </div>
      <p className="mt-1 text-xs text-soft sm:hidden">Desliza para ver todas as páginas →</p>

      {openIndex !== null && (
        <Lightbox
          photos={menuPhotos}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </div>
  );
}
