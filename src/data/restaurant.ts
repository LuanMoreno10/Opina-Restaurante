import arrozPeixe from "../assets/images/Arroz_peixe.jpg";
import peixeBrasa from "../assets/images/peixe_brasa.jpg";
import sala01 from "../assets/images/sala01.jpg";
import sala02 from "../assets/images/sala02.jpg";

export interface RestaurantInfo {
  name: string;
  city: string;
  phoneDisplay: string;
  phoneHref: string;
  theForkUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  facebookUrl: string;
  address: {
    line1: string;
    line2: string;
    mapsUrl: string;
  };
  rating: { score: string; label: string };
}

export const restaurant: RestaurantInfo = {
  name: "Ópina",
  city: "Matosinhos",
  phoneDisplay: "936 344 044",
  phoneHref: "tel:+351936344044",
  theForkUrl: "https://www.thefork.pt/restaurante/opina-r391287",
  instagramUrl: "https://www.instagram.com/restaurante_opina/",
  instagramHandle: "@restaurante_opina",
  facebookUrl: "https://www.facebook.com/opinarestaurante",
  address: {
    line1: "R. São Pedro, 91",
    line2: "4450-718 Matosinhos",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=R.+S%C3%A3o+Pedro%2C+91%2C+4450-718+Matosinhos",
  },
  rating: { score: "8,6/10", label: "Fabuloso · 1900+ avaliações no TheFork" },
};

export type DishIconName = "rice" | "cataplana" | "fish";

export interface Dish {
  name: string;
  description: string;
  tag: string;
  icon: DishIconName;
  /** Leave undefined until real menu pricing is confirmed — never invent a price. */
  price?: string;
}

export const dishes: Dish[] = [
  {
    name: "Arroz de Peixe",
    description:
      "A especialidade da casa: arroz caldoso, no ponto, feito com peixe fresco do dia. É o prato mais elogiado pelos nossos clientes.",
    tag: "Prato da casa",
    icon: "rice",
  },
  {
    name: "Cataplana Algarvia",
    description:
      "Peixe e marisco cozinhados lentamente na cataplana de cobre, ao estilo tradicional do sul de Portugal.",
    tag: "Para partilhar",
    icon: "cataplana",
  },
  {
    name: "Robalo na Brasa",
    description:
      "Robalo inteiro grelhado no fogareiro a carvão — simples, fresco e no ponto certo.",
    tag: "Grelhado na hora",
    icon: "fish",
  },
];

export interface HourRow {
  label: string;
  time: string;
}

export const hours: HourRow[] = [
  { label: "Almoço — todos os dias", time: "12:00 – 15:00" },
  { label: "Jantar — todos os dias", time: "19:00 – 22:00" },
];

export const amenities: string[] = [
  "Terraço",
  "Ideal para grupos",
  "Estacionamento",
  "Wi-Fi",
  "Aberto até tarde",
  "Cartão Visa",
];

export interface Review {
  quote: string;
  author: string;
}

export const review: Review = {
  quote:
    "Restaurante de ambiente familiar, comida de excelência, peixe fresco e de boa qualidade.",
  author: "Liliana V., avaliação no TheFork",
};

export interface GalleryItem {
  id: string;
  title: string;
  category: "Pratos" | "Sala" | "Matosinhos";
  /** Real photo import — omit to fall back to the placeholder treatment. */
  image?: string;
}

// Add more real photos as they arrive: import the file at the top of this
// module and set it as `image` on the matching item below.
export const galleryItems: GalleryItem[] = [
  { id: "arroz-peixe", title: "Arroz de Peixe", category: "Pratos", image: arrozPeixe },
  { id: "brasa", title: "Peixe na Brasa", category: "Pratos", image: peixeBrasa },
  { id: "cataplana", title: "Cataplana Algarvia", category: "Pratos" },
  { id: "sala", title: "A Sala do Ópina", category: "Sala", image: sala01 },
  { id: "mesa", title: "Mesa Posta", category: "Sala", image: sala02 },
  { id: "matosinhos", title: "Junto à Lota de Leixões", category: "Matosinhos" },
];
