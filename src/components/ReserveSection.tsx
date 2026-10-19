import { restaurant } from "../data/restaurant";

export default function ReserveSection() {
  return (
    <section className="border-y border-hairline">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-7 px-6 py-[clamp(64px,10vw,140px)] text-center">
        <span className="kicker">Reservas</span>
        <h2 className="m-0 text-[clamp(48px,8vw,120px)] leading-[0.95] tracking-[-0.03em]">
          Guardamos-lhe <em className="text-accent">a mesa.</em>
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={restaurant.theForkUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Reservar no TheFork
          </a>
          <a href={restaurant.phoneHref} className="btn btn-ghost [font-feature-settings:'tnum']">
            Ligar {restaurant.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
