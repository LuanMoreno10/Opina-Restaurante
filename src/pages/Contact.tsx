import { usePageTitle } from "../hooks/usePageTitle";
import LocationSection from "../components/LocationSection";
import { restaurant } from "../data/restaurant";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${restaurant.address.line1}, ${restaurant.address.line2}`
)}&output=embed`;

export default function Contact() {
  usePageTitle("Contactos — Ópina");

  return (
    <>
      <section className="border-b border-hairline bg-surface py-16 text-center sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <span className="inline-flex items-center rounded-full bg-accent-tint px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-accent">
            Fale Connosco
          </span>
          <h1 className="mx-auto mt-3 max-w-[24ch] text-[2.4rem] sm:text-[3.2rem]">
            Encontre-nos em Matosinhos
          </h1>
        </div>
      </section>

      <LocationSection />

      <section className="mx-auto max-w-[1240px] px-6 pb-[clamp(64px,9vw,120px)]">
        <iframe
          title={`Mapa — ${restaurant.name}, ${restaurant.address.line1}`}
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="plate block aspect-[4/3] w-full sm:aspect-[21/9]"
        />
      </section>
    </>
  );
}
