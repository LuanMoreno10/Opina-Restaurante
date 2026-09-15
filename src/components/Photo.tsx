interface PhotoProps {
  src: string;
  alt: string;
  className?: string;
}

/** Real photo, sized the same way PhotoPlaceholder is — pass an aspect-ratio + size className. */
export default function Photo({ src, alt, className = "" }: PhotoProps) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-hairline ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
    </div>
  );
}
