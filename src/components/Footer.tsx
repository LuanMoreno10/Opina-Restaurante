import { restaurant } from "../data/restaurant";
import logo from "../assets/images/opina-logo.svg";

export default function Footer() {
  const year = new Date().getFullYear();
  const link = "text-[#f3e7e9] no-underline hover:text-wine-300";

  return (
    <footer className="bg-night text-[#d9c9cb]">
      <div className="mx-auto max-w-[1240px] px-6 py-9">
        <div className="mb-9 mt-7 flex justify-center">
          <img src={logo} alt={restaurant.name} className="h-auto w-[min(60%,520px)] opacity-90 [filter:brightness(0)_invert(1)]" />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-[18px] text-[13px]">
          <span>© {year} {restaurant.name} · Peixe &amp; Marisco · {restaurant.city}</span>
          <div className="flex flex-wrap gap-7">
            <a href={restaurant.instagramUrl} target="_blank" rel="noopener noreferrer" className={link}>Instagram</a>
            <a href={restaurant.facebookUrl} target="_blank" rel="noopener noreferrer" className={link}>Facebook</a>
            <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noopener noreferrer" className={link}>Livro de Reclamações</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
