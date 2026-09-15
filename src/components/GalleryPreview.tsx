import { Link } from "react-router-dom";
import { galleryItems } from "../data/restaurant";
import GalleryTile from "./GalleryTile";

export default function GalleryPreview() {
  const featured = galleryItems.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="inline-flex w-fit items-center rounded-full bg-accent-tint px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-accent">
              Frescura Visual
            </span>
            <h2 className="mt-3 text-[2rem] sm:text-[2.7rem]">A Essência do Ópina</h2>
          </div>
          <Link to="/galeria" className="text-sm font-semibold text-accent hover:underline">
            Ver galeria completa →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {featured.map((item) => (
            <GalleryTile key={item.id} item={item} className="aspect-[4/3] w-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
