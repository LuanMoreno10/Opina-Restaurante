import { usePageTitle } from "../hooks/usePageTitle";
import MenuGallery from "../components/MenuGallery";

export default function Menu() {
  usePageTitle("Menu — Ópina");

  return (
    <>
      <section className="bg-surface pb-8 pt-16 text-center sm:pb-10 sm:pt-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <span className="inline-flex items-center rounded-full bg-accent-tint px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-accent">
            A Carta
          </span>
          <h1 className="mx-auto mt-3 max-w-[24ch] text-[2.4rem] sm:text-[3.2rem]">
            A Nossa Ementa
          </h1>
          <p className="mx-auto mt-4 max-w-[52ch] text-lg text-soft">
            Peixe do dia, marisco fresco e receitas de família — este é o
            coração da nossa cozinha.
          </p>
        </div>
      </section>

      <section className="border-t border-hairline bg-panel pb-14 pt-6 sm:pb-20 sm:pt-8">
        <div className="mx-auto max-w-6xl sm:px-8">
          <h2 className="mb-5 px-5 text-sm font-bold uppercase tracking-wide text-soft sm:px-0">
            Toque numa página para ampliar
          </h2>
          <MenuGallery />
        </div>
      </section>
    </>
  );
}
