import Marquee from "./Marquee";

const words = [
  "Peixe fresco",
  "Marisco",
  "Grelhados na brasa",
  "Arroz de Peixe",
  "Cataplana",
  "Matosinhos",
];

export default function TextMarquee() {
  return (
    <section aria-label={words.join(", ")} className="border-y border-hairline py-5 sm:py-7">
      <Marquee speed={-1.6} copies={4} followScrollDirection>
        {words.map((w) => (
          <span
            key={w}
            className="flex items-center whitespace-nowrap font-display text-[clamp(34px,6vw,76px)] italic leading-none"
          >
            <span className="px-[clamp(16px,2.5vw,36px)]">{w}</span>
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent sm:h-2.5 sm:w-2.5" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
