import { useRef, type ReactNode } from "react";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

interface MarqueeProps {
  children: ReactNode;
  /** Track widths per second (negative = moves left). */
  speed?: number;
  /** How many copies of children to lay side by side. One copy must be wider than the viewport. */
  copies?: number;
  /** Reverse direction when the visitor scrolls back up. */
  followScrollDirection?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

/**
 * Endless horizontal strip. Drifts on its own and speeds up with page scroll
 * velocity; stops while off-screen so it costs nothing when not visible.
 */
export default function Marquee({
  children,
  speed = -2,
  copies = 2,
  followScrollDirection = false,
  pauseOnHover = false,
  className = "",
}: MarqueeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { margin: "100px 0px" });
  const reduce = useReducedMotion();
  const hovered = useRef(false);
  const direction = useRef(1);

  const offset = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const boost = useTransform(scrollVelocity, [-1500, 0, 1500], [-4, 0, 4], { clamp: false });
  const x = useTransform(offset, (v) => `${wrap(-100 / copies, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduce || !visible || hovered.current) return;
    const b = boost.get();
    if (followScrollDirection) {
      if (b < -0.05) direction.current = -1;
      else if (b > 0.05) direction.current = 1;
    }
    const base = direction.current * speed * (delta / 1000);
    offset.set(offset.get() + base + base * Math.abs(b));
  });

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${className}`}
      onMouseEnter={pauseOnHover ? () => (hovered.current = true) : undefined}
      onMouseLeave={pauseOnHover ? () => (hovered.current = false) : undefined}
    >
      <motion.div className="flex w-max will-change-transform" style={{ x }}>
        {Array.from({ length: copies }, (_, i) => (
          <div key={i} className="flex shrink-0" aria-hidden={i > 0 || undefined}>
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
