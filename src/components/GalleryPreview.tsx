import { restaurant } from "../data/restaurant";
import sala02 from "../assets/images/sala02.jpg";
import esplanada from "../assets/images/esplanada.jpg";
import sala03 from "../assets/images/sala03.jpg";
import peixeBrasa from "../assets/images/peixe_brasa.jpg";
import entrada from "../assets/images/entrada.jpg";

export default function GalleryPreview() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-[clamp(64px,9vw,120px)]">
      <div className="mb-7 flex flex-wrap items-baseline justify-between gap-4">
        <span className="kicker">03 — A Sala &amp; a Esplanada</span>
        <a href={restaurant.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-display text-lg italic">
          {restaurant.instagramHandle}
        </a>
      </div>
      <div className="grid grid-cols-12 gap-[18px]">
        <img src={sala02} alt="Mesa posta" loading="lazy" className="plate col-span-12 aspect-[4/3] w-full object-cover md:col-span-7" />
        <img src={esplanada} alt="A esplanada do Ópina" loading="lazy" className="plate col-span-12 h-full w-full object-cover md:col-span-5" />
        <img src={sala03} alt="Ambiente da sala" loading="lazy" className="plate col-span-6 aspect-square w-full object-cover md:col-span-4" />
        <img src={peixeBrasa} alt="Peixe na brasa" loading="lazy" className="plate col-span-6 aspect-square w-full object-cover md:col-span-4" />
        <img src={entrada} alt="Entrada do Ópina" loading="lazy" className="plate col-span-12 aspect-square w-full object-cover md:col-span-4" />
      </div>
    </section>
  );
}
