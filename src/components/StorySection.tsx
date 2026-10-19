import { review, restaurant } from "../data/restaurant";

export default function StorySection() {
  return (
    <section id="sobre" className="mx-auto grid max-w-[1240px] grid-cols-1 gap-9 px-6 py-[clamp(64px,10vw,140px)] md:grid-cols-2">
      <div>
        <span className="kicker">01 — A Casa</span>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(36px,4.4vw,60px)] leading-[1.02]">
          Uma casa portuguesa, a passos da lota.
        </h2>
      </div>
      <div className="flex flex-col gap-7">
        <p className="m-0 text-justify text-base leading-[1.75] hyphens-auto">
          O Ópina fica na Rua São Pedro, no coração de Matosinhos — a poucos passos do porto
          de Leixões e da lota, onde o peixe chega fresco todos os dias. É uma casa de
          ambiente calmo e acolhedor, pensada para uma refeição em família ou entre amigos.
        </p>
        <blockquote className="m-0 border-t border-hairline pt-7">
          <p className="m-0 mb-3 font-display text-2xl italic leading-[1.35]">
            &ldquo;{review.quote}&rdquo;
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="tag-outline [font-feature-settings:'tnum']">{restaurant.rating.score}</span>
            <cite className="text-[13px] not-italic text-soft">
              {review.author.split(",")[0]} · 1900+ avaliações no TheFork
            </cite>
          </div>
        </blockquote>
      </div>
    </section>
  );
}
