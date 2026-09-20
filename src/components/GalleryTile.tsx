import type { GalleryItem } from "../data/restaurant";
import Photo from "./Photo";
import PhotoPlaceholder from "./PhotoPlaceholder";

interface GalleryTileProps {
  item: GalleryItem;
  className?: string;
  /** When provided, real photos become buttons that open the enlarged view. */
  onOpen?: () => void;
}

export default function GalleryTile({
  item,
  className = "aspect-[4/3] w-full",
  onOpen,
}: GalleryTileProps) {
  if (item.image) {
    const photo = <Photo src={item.image} alt={item.title} className={className} />;
    if (!onOpen) return photo;
    return (
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Ampliar: ${item.title}`}
        className="block w-full rounded-2xl text-left transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {photo}
      </button>
    );
  }
  return <PhotoPlaceholder label={item.title} className={className} />;
}
