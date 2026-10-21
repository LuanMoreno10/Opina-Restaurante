import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, lineGrow, stagger } from "../lib/motion";

interface PageHeaderProps {
  kicker: string;
  title: string;
  children?: ReactNode;
}

/** Opening block for inner pages, in the same language as the homepage sections. */
export default function PageHeader({ kicker, title, children }: PageHeaderProps) {
  return (
    <motion.header
      className="mx-auto max-w-[1240px] px-6 pb-[clamp(28px,4vw,44px)] pt-[clamp(40px,7vw,88px)]"
      initial="hidden"
      animate="show"
      variants={stagger(0.09)}
    >
      <motion.span variants={fadeUp} className="kicker block">
        {kicker}
      </motion.span>
      <motion.h1
        variants={fadeUp}
        className="mt-4 max-w-[16ch] text-[clamp(44px,7vw,92px)] leading-[0.98] tracking-[-0.02em]"
      >
        {title}
      </motion.h1>
      {children && (
        <motion.p variants={fadeUp} className="mb-0 mt-5 max-w-[52ch] text-base leading-[1.7] text-soft">
          {children}
        </motion.p>
      )}
      <motion.div variants={lineGrow} className="mt-8 h-px origin-left bg-hairline" />
    </motion.header>
  );
}
