import { useMemo, useState } from "react";
import { usePageTitle } from "../hooks/usePageTitle";
import { galleryItems, type GalleryItem } from "../data/restaurant";
import GalleryTile from "../components/GalleryTile";
import Lightbox from "../components/Lightbox";

const categories: Array<GalleryItem["category"] | "Tudo"> = [
  "Tudo",
  "Pratos",
  "Sala",
];

export default function Gallery() {
  usePageTitle("Galeria — Ópina");
  const [active, setActive] = useState<(typeof categories)[number]>("Tudo");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(
    () =>
      active === "Tudo" ? galleryItems : galleryItems.filter((item) => item.category === active),
    [active]
  );

  const viewable = useMemo(
    () => items.filter((item) => item.image),
    [items]
  );
  const lightboxPhotos = useMemo(
    () => viewable.map((item) => ({ src: item.image as string, alt: item.title })),
    [viewable]
  );

  return (
    <>
      <section className="border-b border-hairline bg-surface pb-8 pt-14 text-center sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <span className="inline-flex items-center rounded-full bg-accent-tint px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-accent">
            Frescura Visual
          </span>
          <h1 className="mx-auto mt-3 max-w-[24ch] text-[2.4rem] sm:text-[3.2rem]">
            A Essência do Ópina
          </h1>
          <p className="mx-auto mt-4 max-w-[52ch] text-lg text-soft">
            Estamos a juntar fotografias reais aos poucos — esta página vai
            crescendo à medida que as tiramos.
          </p>
        </div>
      </section>

      <section className="pb-14 pt-8 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-6 flex flex-wrap gap-2 sm:mb-9 sm:gap-2.5">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={`inline-flex min-h-11 items-center rounded-full border px-5 text-sm font-medium transition-colors sm:min-h-0 sm:px-4 sm:py-2 ${
                  active === category
                    ? "border-accent bg-accent text-accentc"
                    : "border-hairline text-soft hover:border-accent hover:text-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-5 lg:grid-cols-3">
            {items.map((item) => (
              <GalleryTile
                key={item.id}
                item={item}
                className="aspect-[4/5] w-full sm:aspect-[4/3]"
                onOpen={() => setOpenIndex(viewable.indexOf(item))}
              />
            ))}
          </div>
        </div>
      </section>

      {openIndex !== null && (
        <Lightbox
          photos={lightboxPhotos}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </>
  );
}
