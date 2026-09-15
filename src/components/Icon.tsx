export type IconName = "phone" | "map-pin" | "clock" | "external-link" | "instagram";

const paths: Record<IconName, React.ReactNode> = {
  phone: (
    <path d="M6.5 3h3l1.5 4-2 1.5a10 10 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2C10.5 18.5 5.5 13.5 4.5 6.5a2 2 0 0 1 2-2Z" />
  ),
  "map-pin": (
    <>
      <path d="M18 10.5c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="10" cy="10.5" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="10" cy="10" r="8" />
      <path d="M10 5.5V10l3.2 2" />
    </>
  ),
  "external-link": (
    <>
      <path d="M8.2 5H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3.2" />
      <path d="M12 3h5v5M16.5 3.5 9 11" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="14" height="14" rx="4" />
      <circle cx="10" cy="10" r="3.6" />
      <circle cx="14.3" cy="5.7" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
};

interface IconProps {
  name: IconName;
  className?: string;
}

export default function Icon({ name, className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
