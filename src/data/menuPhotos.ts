import menu01 from "../assets/images/Menu01.avif";
import menu02 from "../assets/images/Menu02.avif";
import menu03 from "../assets/images/Menu03.avif";
import menu04 from "../assets/images/Menu04.avif";
import menu05 from "../assets/images/Menu05.avif";
import menu06 from "../assets/images/Menu06.avif";
import menu07 from "../assets/images/Menu07.avif";
import menu08 from "../assets/images/Menu08.avif";
import menu09 from "../assets/images/Menu09.png";
import menu10 from "../assets/images/Menu10.jpg";

export interface MenuPage {
  src: string;
  alt: string;
}

// Photographed pages of the real, printed Ópina menu — in reading order.
export const menuPhotos: MenuPage[] = [
  { src: menu01, alt: "Ementa do Ópina — página 1" },
  { src: menu02, alt: "Ementa do Ópina — página 2" },
  { src: menu03, alt: "Ementa do Ópina — página 3" },
  { src: menu04, alt: "Ementa do Ópina — página 4" },
  { src: menu05, alt: "Ementa do Ópina — página 5" },
  { src: menu06, alt: "Ementa do Ópina — página 6" },
  { src: menu07, alt: "Ementa do Ópina — página 7" },
  { src: menu08, alt: "Ementa do Ópina — página 8" },
  { src: menu09, alt: "Ementa do Ópina — página 9" },
  { src: menu10, alt: "Ementa do Ópina — página 10" },
];
