import { usePageTitle } from "../hooks/usePageTitle";
import MenuGallery from "../components/MenuGallery";
import PageHeader from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

export default function Menu() {
  usePageTitle("Carta — Ópina");

  return (
    <>
      <PageHeader kicker="A Carta" title="A Nossa Ementa">
        Peixe do dia, marisco fresco e receitas de família — este é o coração da nossa cozinha.
      </PageHeader>

      <section className="border-y border-hairline bg-panel pb-14 pt-8 sm:pb-20 sm:pt-10">
        <div className="mx-auto max-w-[1240px] sm:px-6">
          <p className="kicker kicker-muted mb-5 mt-0 px-6 sm:px-0">
            <span className="sm:hidden">Toque</span>
            <span className="hidden sm:inline">Clique</span> numa página para ampliar
          </p>
          <Reveal>
            <MenuGallery />
          </Reveal>
        </div>
      </section>
    </>
  );
}
