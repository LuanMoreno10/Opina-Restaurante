interface PhotoProps {
  src: string;
  alt: string;
  className?: string;
  /** Above-the-fold photos should load immediately instead of lazily. */
  priority?: boolean;
}

/** Real photo, sized the same way PhotoPlaceholder is — pass an aspect-ratio + size className. */
export default function Photo({ src, alt, className = "", priority = false }: PhotoProps) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-hairline ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
}
