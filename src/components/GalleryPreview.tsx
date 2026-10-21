import { Link } from "react-router-dom";
import { galleryItems, restaurant } from "../data/restaurant";
import Marquee from "./Marquee";
import { Reveal } from "./Reveal";

// Alternate room and plates so the strip never shows two of a kind in a row.
const ORDER = [
  "sala", "arroz-peixe", "mesa", "tigre", "esplanada", "polvo",
  "sala-ambiente", "cataplana", "esplanada02", "sapateira", "sala04", "gambas",
];
// Landscape photos; everything else is 4:5 portrait.
const WIDE = new Set(["sala", "esplanada"]);

const strip = ORDER.map((id) => galleryItems.find((g) => g.id === id)).filter(
  (g): g is (typeof galleryItems)[number] & { image: string } => !!g?.image
);

export default function GalleryPreview() {
  return (
    <section className="py-[clamp(64px,9vw,120px)]">
      <Reveal className="mx-auto mb-7 flex max-w-[1240px] flex-wrap items-baseline justify-between gap-x-6 gap-y-2 px-6">
        <span className="kicker">03 — A Sala &amp; a Esplanada</span>
        <div className="flex items-baseline gap-5">
          <a
            href={restaurant.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden font-display text-lg italic sm:inline"
          >
            {restaurant.instagramHandle}
          </a>
          <Link to="/galeria" className="btn btn-ghost group !px-0">
            Ver a galeria
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </Reveal>

      <Reveal>
        <Marquee speed={-1.2} copies={2} pauseOnHover>
          {strip.map((item) => (
            <Link
              key={item.id}
              to="/galeria"
              tabIndex={-1}
              className="group block shrink-0 pr-3 no-underline sm:pr-[18px]"
            >
              <figure className="m-0">
                <div
                  className={`plate overflow-hidden h-[210px] sm:h-[260px] lg:h-[320px] ${
                    WIDE.has(item.id) ? "aspect-[3/2]" : "aspect-[4/5]"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.06]"
                  />
                </div>
                <figcaption className="mt-2 text-[12px] italic text-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100 [@media(hover:none)]:opacity-100">
                  {item.title}
                </figcaption>
              </figure>
            </Link>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
