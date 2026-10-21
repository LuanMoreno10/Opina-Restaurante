import { motion } from "framer-motion";
import { restaurant } from "../data/restaurant";
import { RevealGroup, RevealItem } from "./Reveal";
import { ease, inView, stagger } from "../lib/motion";

const word = {
  hidden: { y: "105%" },
  show: { y: "0%", transition: { duration: 0.9, ease } },
};

function Words({ text, className = "" }: { text: string; className?: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span variants={word} className={`inline-block ${className}`}>
            {w}
          </motion.span>
          &nbsp;
        </span>
      ))}
    </>
  );
}

export default function ReserveSection() {
  return (
    <section className="border-y border-hairline">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-7 px-6 py-[clamp(64px,10vw,140px)] text-center">
        <RevealGroup>
          <RevealItem>
            <span className="kicker">Reservas</span>
          </RevealItem>
        </RevealGroup>
        <motion.h2
          className="m-0 text-[clamp(46px,8vw,120px)] leading-[0.95] tracking-[-0.03em]"
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={stagger(0.08)}
          aria-label="Guardamos-lhe a mesa."
        >
          <span aria-hidden="true">
            <Words text="Guardamos-lhe" />
            <em>
              <Words text="a mesa." className="text-accent" />
            </em>
          </span>
        </motion.h2>
        <RevealGroup delay={0.3} className="flex flex-wrap justify-center gap-3">
          <RevealItem>
            <a href={restaurant.theForkUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Reservar no TheFork
            </a>
          </RevealItem>
          <RevealItem>
            <a href={restaurant.phoneHref} className="btn btn-ghost [font-feature-settings:'tnum']">
              Ligar {restaurant.phoneDisplay}
            </a>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
