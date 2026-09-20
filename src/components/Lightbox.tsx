import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

export interface LightboxPhoto {
  src: string;
  alt: string;
}

interface LightboxProps {
  photos: LightboxPhoto[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const SWIPE_MIN_PX = 50;

const iconButton =
  "inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white";

const stepButton =
  "inline-flex h-12 min-w-32 items-center justify-center gap-2 rounded-full bg-white/10 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10";

export default function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const photo = photos[index];
  const canPrev = index > 0;
  const canNext = index < photos.length - 1;

  const [zoomed, setZoomed] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const zoomOrigin = useRef({ x: 0.5, y: 0 });
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const go = useCallback(
    (next: number) => {
      setZoomed(false);
      onNavigate(next);
    },
    [onNavigate]
  );

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft" && canPrev) go(index - 1);
      else if (e.key === "ArrowRight" && canNext) go(index + 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, canPrev, canNext, onClose, go]);

  // Warm the cache so swiping to a neighbouring page feels instant.
  useEffect(() => {
    [photos[index - 1], photos[index + 1]].forEach((p) => {
      if (p) new Image().src = p.src;
    });
  }, [index, photos]);

  // After toggling zoom, keep the spot the visitor tapped in view.
  useLayoutEffect(() => {
    const stage = stageRef.current;
    const img = imgRef.current;
    if (!stage || !img) return;
    if (!zoomed) {
      stage.scrollTo(0, 0);
      return;
    }
    const { x, y } = zoomOrigin.current;
    stage.scrollTo(
      x * img.offsetWidth - stage.clientWidth / 2,
      y * img.offsetHeight - stage.clientHeight / 2
    );
  }, [zoomed, index]);

  const toggleZoomFromButton = () => {
    if (!zoomed) zoomOrigin.current = { x: 0.5, y: 0 };
    setZoomed((z) => !z);
  };

  const onImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    if (!zoomed) {
      const r = e.currentTarget.getBoundingClientRect();
      zoomOrigin.current = {
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top) / r.height,
      };
    }
    setZoomed((z) => !z);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current =
      !zoomed && e.touches.length === 1
        ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
        : null;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const dx = e.changedTouches[0].clientX - start.x;
    const dy = e.changedTouches[0].clientY - start.y;
    if (Math.abs(dx) < SWIPE_MIN_PX || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    if (dx < 0 && canNext) go(index + 1);
    if (dx > 0 && canPrev) go(index - 1);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${photo.alt} — imagem ${index + 1} de ${photos.length}`}
      className="fixed inset-0 z-50 flex flex-col bg-black sm:bg-black/95"
    >
      <div className="flex shrink-0 items-center justify-between gap-2 px-3 py-2 sm:px-5 sm:py-4">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white [font-variant-numeric:tabular-nums]">
          {index + 1} / {photos.length}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleZoomFromButton}
            aria-pressed={zoomed}
            aria-label={zoomed ? "Reduzir" : "Ampliar"}
            className={iconButton}
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <circle cx="8.5" cy="8.5" r="5.5" />
              <path d="M16 16l-3.2-3.2" />
              <path d={zoomed ? "M6 8.5h5" : "M6 8.5h5M8.5 6v5"} />
            </svg>
          </button>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Fechar" className={iconButton}>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative min-h-0 flex-1">
        <div
          ref={stageRef}
          className={`flex h-full overscroll-contain p-2 sm:px-20 sm:pb-6 ${
            zoomed ? "overflow-auto" : "overflow-hidden"
          }`}
          onClick={(e) => {
            if (!zoomed && e.target === e.currentTarget) onClose();
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <img
            ref={imgRef}
            src={photo.src}
            alt={photo.alt}
            draggable={false}
            onClick={onImageClick}
            className={`m-auto select-none rounded-lg shadow-2xl ${
              zoomed
                ? "w-[240vw] max-w-none shrink-0 cursor-zoom-out sm:w-[min(1200px,150vw)]"
                : "max-h-full max-w-full cursor-zoom-in object-contain"
            }`}
          />
        </div>

        {canPrev && (
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Anterior"
            className={`${iconButton} absolute left-4 top-1/2 hidden -translate-y-1/2 sm:inline-flex`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
        )}
        {canNext && (
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Seguinte"
            className={`${iconButton} absolute right-4 top-1/2 hidden -translate-y-1/2 sm:inline-flex`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      <div className="flex shrink-0 items-center justify-center gap-3 px-3 pb-3 pt-2 sm:hidden">
        <button type="button" onClick={() => go(index - 1)} disabled={!canPrev} className={stepButton}>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
          Anterior
        </button>
        <button type="button" onClick={() => go(index + 1)} disabled={!canNext} className={stepButton}>
          Seguinte
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
