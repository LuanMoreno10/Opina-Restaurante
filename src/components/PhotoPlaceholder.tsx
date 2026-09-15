interface PhotoPlaceholderProps {
  label: string;
  className?: string;
}

/**
 * Stand-in for a real photograph. Swap for an <img> once real photos exist —
 * everywhere this is used takes a `className` for sizing, so the layout
 * doesn't need to change when you do.
 */
export default function PhotoPlaceholder({ label, className = "" }: PhotoPlaceholderProps) {
  return (
    <div
      className={`relative flex items-end overflow-hidden rounded-2xl border border-hairline bg-[linear-gradient(155deg,var(--secondary)_0%,var(--dark-bg)_55%,var(--accent)_130%)] opacity-90 ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-25"
        preserveAspectRatio="none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path
          d="M0,120 C40,140 60,90 100,110 C140,130 160,80 200,100 L200,200 L0,200 Z"
          fill="rgba(255,255,255,0.18)"
        />
      </svg>
      <span className="relative z-10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white/85">
        {label} · foto em breve
      </span>
    </div>
  );
}
