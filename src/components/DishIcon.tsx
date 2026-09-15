import type { DishIconName } from "../data/restaurant";

const paths: Record<DishIconName, React.ReactNode> = {
  rice: (
    <>
      <path d="M6 30c6 6 30 6 36 0" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 24c4-10 12-16 16-16s12 6 16 16" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M14 24c2-5 6-9 10-9s8 4 10 9"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="16" cy="27" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="24" cy="29" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="32" cy="27" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  cataplana: (
    <>
      <ellipse cx="24" cy="26" rx="18" ry="9" strokeWidth="2" />
      <path d="M9 26c0 6 6.7 11 15 11s15-5 15-11" strokeWidth="2" />
      <path
        d="M17 22c1.5-2 3-3 3-5M24 21c1.5-2 3-3 3-5M31 22c1.5-2 3-3 3-5"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />
    </>
  ),
  fish: (
    <>
      <path
        d="M6 24c4-6 10-9 18-9s16 5 18 9c-2 4-10 9-18 9S10 28 6 24Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M34 20l6-5M34 28l6 5" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="24" r="1.6" fill="currentColor" stroke="none" />
      <path d="M22 19c1.5 2 1.5 8 0 10" strokeWidth="1.4" opacity="0.6" />
    </>
  ),
};

interface DishIconProps {
  name: DishIconName;
  className?: string;
}

export default function DishIcon({ name, className }: DishIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
