import { Link } from "react-router-dom";
import { restaurant } from "../data/restaurant";
import logo from "../assets/images/opina-logo.svg";

export default function Footer() {
  const year = new Date().getFullYear();
  const link = "text-[#f3e7e9] no-underline transition-colors hover:text-wine-300";

  return (
    <footer className="bg-night text-[13px] text-[#d9c9cb]">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-4 px-6 py-7 text-center md:flex-row md:justify-between md:gap-6 md:py-6 md:text-left">
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-5">
          <Link to="/" aria-label={`${restaurant.name} — início`} className="no-underline">
            <img
              src={logo}
              alt=""
              width={274}
              height={126}
              className="h-7 w-auto opacity-90 [filter:brightness(0)_invert(1)]"
            />
          </Link>
          <span>
            © {year} {restaurant.name} · Peixe &amp; Marisco · {restaurant.city}
          </span>
        </div>
        <nav aria-label="Ligações do rodapé" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a href={restaurant.instagramUrl} target="_blank" rel="noopener noreferrer" className={link}>Instagram</a>
          <a href={restaurant.facebookUrl} target="_blank" rel="noopener noreferrer" className={link}>Facebook</a>
          <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noopener noreferrer" className={link}>Livro de Reclamações</a>
        </nav>
      </div>
    </footer>
  );
}
