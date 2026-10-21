import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, inView, stagger } from "../lib/motion";

type DivProps = HTMLMotionProps<"div">;

/** A block that fades up the first time it scrolls into view. */
export function Reveal({ delay = 0, ...props }: DivProps & { delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={inView}
      variants={fadeUp}
      transition={{ delay }}
      {...props}
    />
  );
}

/** Parent that staggers its RevealItem children as it enters the viewport. */
export function RevealGroup({
  gap = 0.08,
  delay = 0,
  ...props
}: DivProps & { gap?: number; delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={inView}
      variants={stagger(gap, delay)}
      {...props}
    />
  );
}

export function RevealItem(props: DivProps) {
  return <motion.div variants={fadeUp} {...props} />;
}
