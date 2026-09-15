import { review } from "../data/restaurant";
import Photo from "./Photo";
import arrozPeixe from "../assets/images/Arroz_peixe.jpg";

export default function StorySection() {
  return (
    <section id="sobre" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Photo
          src={arrozPeixe}
          alt="Arroz de peixe do Ópina"
          className="aspect-[4/5] w-full lg:aspect-auto"
        />

        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center rounded-full bg-accent-tint px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-accent">
            Origem e Paixão
          </span>
          <h2 className="mt-3 text-[2rem] leading-[1.15] sm:text-[2.7rem]">
            Do Mar Para o Prato, Com Tradição
          </h2>
          <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-soft">
            O Ópina fica na Rua São Pedro, no coração de Matosinhos — a
            poucos passos do porto de Leixões e da lota, onde o peixe chega
            fresco todos os dias. É uma casa portuguesa, de ambiente calmo e
            acolhedor, pensada para uma refeição em família ou entre amigos.
          </p>
          <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-soft">
            A nossa história completa está a ser escrita — esta secção será
            atualizada em breve com mais detalhes sobre a família por trás
            do Ópina.
          </p>

          <blockquote className="mt-8 rounded-2xl border border-hairline bg-surface p-6">
            <p className="font-display text-lg italic leading-relaxed text-ink">
              &ldquo;{review.quote}&rdquo;
            </p>
            <cite className="mt-3 block text-sm font-semibold not-italic text-soft">
              — {review.author}
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
