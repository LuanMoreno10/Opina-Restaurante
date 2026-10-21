import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import logo from "../assets/images/opina-logo.svg";
import sala from "../assets/images/sala01.jpg";
import { useIntroDone } from "./Intro";
import { ease, fadeUp, lineGrow, stagger } from "../lib/motion";

export default function Hero() {
  const ready = useIntroDone();
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ["start end", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <motion.section
      className="mx-auto max-w-[1240px] px-6 pt-7 sm:pt-9"
      initial="hidden"
      animate={ready ? "show" : "hidden"}
      variants={stagger(0.1)}
    >
      <motion.div variants={fadeUp} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 pb-3">
        <span className="kicker kicker-muted">Matosinhos · Porto de Leixões</span>
        <span className="kicker kicker-muted">Aberto de terça a domingo</span>
      </motion.div>
      <motion.div variants={lineGrow} className="h-px origin-left bg-hairline" />

      <h1 className="my-8 flex justify-center sm:my-9">
        <motion.img
          src={logo}
          alt="Ópina"
          width={274}
          height={126}
          className="h-auto w-[min(82%,760px)]"
          variants={{
            hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
            show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease } },
          }}
        />
      </h1>

      <motion.div variants={stagger(0.12)} className="mb-8 grid grid-cols-1 items-end gap-5 sm:mb-9 md:grid-cols-2 md:gap-7">
        <motion.p variants={fadeUp} className="m-0 max-w-[22ch] font-display text-[clamp(24px,2.6vw,32px)] italic leading-tight">
          Peixe e marisco fresco, com sabor a casa.
        </motion.p>
        <motion.p variants={fadeUp} className="m-0 max-w-[46ch] leading-[1.7] md:justify-self-end">
          Restaurante de família em Matosinhos, junto ao porto de Leixões — grelhados na
          brasa e o melhor marisco fresco da costa portuguesa.
        </motion.p>
      </motion.div>

      <motion.div
        ref={photoRef}
        className="plate relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[21/9]"
        variants={{
          hidden: { clipPath: "inset(8% 6% 8% 6%)", opacity: 0 },
          show: {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            transition: { duration: 1.1, ease },
          },
        }}
      >
        <motion.img
          src={sala}
          alt="A sala do Ópina"
          className="absolute inset-x-0 top-[-8%] h-[116%] w-full object-cover"
          style={{ y: photoY }}
        />
      </motion.div>
    </motion.section>
  );
}
