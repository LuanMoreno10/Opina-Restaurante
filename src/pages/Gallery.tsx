import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { usePageTitle } from "../hooks/usePageTitle";
import { galleryItems, type GalleryItem } from "../data/restaurant";
import GalleryTile from "../components/GalleryTile";
import Lightbox from "../components/Lightbox";
import PageHeader from "../components/PageHeader";
import { ease, springSoft } from "../lib/motion";

const categories: Array<GalleryItem["category"] | "Tudo"> = ["Tudo", "Pratos", "Sala"];

export default function Gallery() {
  usePageTitle("Galeria — Ópina");
  const [active, setActive] = useState<(typeof categories)[number]>("Tudo");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (active === "Tudo" ? galleryItems : galleryItems.filter((item) => item.category === active)),
    [active]
  );
  const viewable = useMemo(() => items.filter((item) => item.image), [items]);
  const lightboxPhotos = useMemo(
    () => viewable.map((item) => ({ src: item.image as string, alt: item.title })),
    [viewable]
  );

  return (
    <>
      <PageHeader kicker="Galeria" title="A Essência do Ópina">
        A sala, a esplanada e o que sai da cozinha — fotografias reais da casa.
      </PageHeader>

      <section className="mx-auto max-w-[1240px] px-6 pb-[clamp(56px,9vw,120px)]">
        <LayoutGroup>
          <div role="group" aria-label="Filtrar fotografias" className="mb-6 flex flex-wrap gap-2 sm:mb-8">
            {categories.map((category) => {
              const selected = active === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  aria-pressed={selected}
                  className={`relative inline-flex min-h-11 items-center px-4 font-display text-[17px] transition-colors sm:min-h-10 ${
                    selected ? "text-accent" : "text-soft hover:text-ink"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="galeria-filtro"
                      aria-hidden="true"
                      className="absolute inset-0 rounded-[4px] border border-accent bg-accent-tint"
                      transition={springSoft}
                    />
                  )}
                  <span className="relative">{category}</span>
                </button>
              );
            })}
          </div>

          <motion.div layout className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            <AnimatePresence mode="popLayout" initial={false}>
              {items.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease, delay: Math.min(i, 8) * 0.04 } }}
                  exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
                >
                  <GalleryTile
                    item={item}
                    className="aspect-[4/5] w-full sm:aspect-[4/3]"
                    onOpen={() => setOpenIndex(viewable.indexOf(item))}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
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
