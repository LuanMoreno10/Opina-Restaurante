import { motion } from "framer-motion";
import { review, restaurant } from "../data/restaurant";
import { RevealGroup, RevealItem } from "./Reveal";
import { lineGrow } from "../lib/motion";

export default function StorySection() {
  return (
    <section id="sobre" className="mx-auto max-w-[1240px] px-6 py-[clamp(64px,10vw,140px)]">
      <RevealGroup className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-9">
        <div>
          <RevealItem>
            <span className="kicker">01 — A Casa</span>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-4 max-w-[12ch] text-[clamp(38px,4.4vw,60px)] leading-[1.02]">
              Uma casa portuguesa, a passos da lota.
            </h2>
          </RevealItem>
        </div>
        <div className="flex flex-col gap-7">
          <RevealItem>
            <p className="m-0 text-base leading-[1.75]">
              O Ópina fica na Rua São Pedro, no coração de Matosinhos — a poucos passos do
              porto de Leixões e da lota, onde o peixe chega fresco todos os dias. É uma casa
              de ambiente calmo e acolhedor, pensada para uma refeição em família ou entre
              amigos.
            </p>
          </RevealItem>
          <RevealItem>
            <blockquote className="m-0">
              <motion.div variants={lineGrow} className="mb-7 h-px origin-left bg-hairline" />
              <p className="m-0 mb-3 font-display text-[clamp(22px,2.2vw,26px)] italic leading-[1.35]">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="tag-outline [font-feature-settings:'tnum']">{restaurant.rating.score}</span>
                <cite className="text-[13px] not-italic text-soft">
                  {review.author.split(",")[0]} · 1900+ avaliações no TheFork
                </cite>
              </div>
            </blockquote>
          </RevealItem>
        </div>
      </RevealGroup>
    </section>
  );
}
