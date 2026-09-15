import { Link } from "react-router-dom";
import { restaurant } from "../data/restaurant";
import Photo from "./Photo";
import entrada from "../assets/images/entrada.jpg";

export default function Hero() {
  return (
    <section className="border-b border-hairline bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:gap-16 lg:py-24">
        <div className="flex flex-1 flex-col items-start gap-7">
          <h1 className="text-[2.6rem] font-bold leading-[1.05] text-ink sm:text-[3.4rem] lg:text-[4rem]">
            Peixe e Marisco Fresco com Sabor a Casa
          </h1>

          <p className="max-w-[46ch] text-lg leading-relaxed text-soft">
            Restaurante de família em Matosinhos, junto ao porto de Leixões —
            grelhados na brasa e o melhor marisco fresco da costa
            portuguesa.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/menu"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-7 text-sm font-semibold uppercase tracking-wide text-accentc transition-transform hover:-translate-y-0.5"
            >
              Ver Menu
            </Link>
            <a
              href={restaurant.theForkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-accent px-7 text-sm font-semibold uppercase tracking-wide text-accent transition-colors hover:bg-accent-tint"
            >
              Reservar
            </a>
          </div>

          <div className="inline-flex items-center gap-2.5 rounded-lg border border-hairline bg-cream py-2 pl-2 pr-4 text-sm">
            <b className="rounded-md bg-accent px-2.5 py-1 text-accentc [font-variant-numeric:tabular-nums]">
              {restaurant.rating.score}
            </b>
            <span className="text-soft">{restaurant.rating.label}</span>
          </div>
        </div>

        <Photo
          src={entrada}
          alt="Fachada do restaurante Ópina, em Matosinhos"
          className="aspect-[4/5] w-full max-w-[420px] flex-shrink-0 lg:w-[420px]"
        />
      </div>
    </section>
  );
}
