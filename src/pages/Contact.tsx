import { usePageTitle } from "../hooks/usePageTitle";
import LocationSection from "../components/LocationSection";

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
    </>
  );
}
