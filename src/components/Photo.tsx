interface PhotoProps {
  src: string;
  alt: string;
  className?: string;
  /** Above-the-fold photos should load immediately instead of lazily. */
  priority?: boolean;
}

/** Real photo matted like the homepage plates — pass an aspect-ratio + size className. */
export default function Photo({ src, alt, className = "", priority = false }: PhotoProps) {
  return (
    <div className={`plate overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.05]"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
}
