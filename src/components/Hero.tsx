import logo from "../assets/images/opina-logo.svg";
import sala from "../assets/images/sala01.jpg";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 pt-9">
      <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-hairline pb-3">
        <span className="kicker kicker-muted">Matosinhos · Porto de Leixões</span>
        <span className="kicker kicker-muted">Aberto de terça a domingo</span>
      </div>

      <h1 className="my-9 flex justify-center">
        <img src={logo} alt="Ópina" className="h-auto w-[min(78%,760px)]" />
      </h1>

      <div className="mb-9 grid grid-cols-1 items-end gap-7 md:grid-cols-2">
        <p className="m-0 max-w-[22ch] font-display text-[clamp(22px,2.4vw,30px)] italic leading-tight">
          Peixe e marisco fresco, com sabor a casa.
        </p>
        <p className="m-0 max-w-[46ch] text-justify leading-[1.7] hyphens-auto md:justify-self-end">
          Restaurante de família em Matosinhos, junto ao porto de Leixões — grelhados na
          brasa e o melhor marisco fresco da costa portuguesa.
        </p>
      </div>

      <img src={sala} alt="A sala do Ópina" className="plate aspect-[21/9] w-full object-cover" />
    </section>
  );
}
