import arrozPeixe from "../assets/images/Arroz_peixe.jpg";
import cataplana from "../assets/images/cataplana.jpg";
import peixeBrasa from "../assets/images/peixe_brasa.jpg";
import polvo from "../assets/images/polvo.jpg";
import sapateira from "../assets/images/sapateira.jpg";

export interface Specialty {
  name: string;
  tag: string;
  description: string;
  image: string;
}

// Confirm the copy for Polvo and Sapateira with the kitchen.
export const specialties: Specialty[] = [
  { name: "Arroz de Peixe", tag: "Prato da casa", image: arrozPeixe,
    description: "Arroz caldoso, no ponto, feito com peixe fresco do dia. O prato mais elogiado pelos nossos clientes." },
  { name: "Cataplana Algarvia", tag: "Para partilhar", image: cataplana,
    description: "Peixe e marisco cozinhados lentamente na cataplana de cobre, ao estilo tradicional do sul." },
  { name: "Peixe na Brasa", tag: "Grelhado na hora", image: peixeBrasa,
    description: "Peixe inteiro grelhado no fogareiro a carvão — simples, fresco e no ponto certo." },
  { name: "Polvo à Lagareiro", tag: "Clássico", image: polvo,
    description: "Polvo assado no forno com batata a murro, alho e azeite." },
  { name: "Sapateira Recheada", tag: "Marisco", image: sapateira,
    description: "Sapateira da costa, recheada à moda da casa." },
];
