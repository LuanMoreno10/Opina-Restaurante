import { usePageTitle } from "../hooks/usePageTitle";
import LocationSection from "../components/LocationSection";
import PageHeader from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { restaurant } from "../data/restaurant";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${restaurant.address.line1}, ${restaurant.address.line2}`
)}&output=embed`;

export default function Contact() {
  usePageTitle("Contactos — Ópina");

  return (
    <>
      <PageHeader kicker="Contactos" title="Encontre-nos em Matosinhos">
        A poucos passos do porto de Leixões. Para reservas, ligue-nos ou reserve no TheFork.
      </PageHeader>

      <LocationSection kicker={null} />

      <section className="mx-auto max-w-[1240px] px-6 pb-[clamp(56px,9vw,120px)]">
        <Reveal>
          <iframe
            title={`Mapa — ${restaurant.name}, ${restaurant.address.line1}`}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="plate block aspect-[4/3] w-full sm:aspect-[21/9]"
          />
        </Reveal>
      </section>
    </>
  );
}
