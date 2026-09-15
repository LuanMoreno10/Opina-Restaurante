import type { GalleryItem } from "../data/restaurant";
import Photo from "./Photo";
import PhotoPlaceholder from "./PhotoPlaceholder";

interface GalleryTileProps {
  item: GalleryItem;
  className?: string;
}

export default function GalleryTile({ item, className = "aspect-[4/3] w-full" }: GalleryTileProps) {
  if (item.image) {
    return <Photo src={item.image} alt={item.title} className={className} />;
  }
  return <PhotoPlaceholder label={item.title} className={className} />;
}
