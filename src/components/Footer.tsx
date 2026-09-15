import { Link } from "react-router-dom";
import { restaurant } from "../data/restaurant";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--ink-fixed)] pb-8 pt-16 text-[#a99e98]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-display text-2xl font-black text-white">
                {restaurant.name}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#d8cfc9]">
                Peixe &amp; Marisco Fresco
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              A honrar o melhor peixe fresco e marisco na brasa em
              Matosinhos.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-wide text-white">
              O Restaurante
            </p>
            <Link to="/#sobre" className="text-sm hover:text-white">
              A Nossa História
            </Link>
            <Link to="/menu" className="text-sm hover:text-white">
              O Nosso Menu
            </Link>
            <Link to="/galeria" className="text-sm hover:text-white">
              Galeria
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-wide text-white">
              Informação
            </p>
            <span className="text-sm">Matosinhos</span>
            <span className="text-sm">{restaurant.address.line1}</span>
            <Link to="/contactos" className="text-sm hover:text-white">
              Contactos
            </Link>
            <a
              href="https://www.livroreclamacoes.pt/Inicio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white"
            >
              Livro de Reclamações
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-wide text-white">Siga-nos</p>
            <div className="flex gap-2.5">
              <a
                href={restaurant.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.07] text-white hover:bg-white/[0.14]"
                aria-label="Instagram do Ópina"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <rect x="3" y="3" width="14" height="14" rx="4" />
                  <circle cx="10" cy="10" r="3.6" />
                  <circle cx="14.3" cy="5.7" r="0.9" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={restaurant.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.07] text-white hover:bg-white/[0.14]"
                aria-label="Facebook do Ópina"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M12.5 6.5h-1.6c-.6 0-1.1.5-1.1 1.1V9.5H12.5l-.3 2.3h-2.4V17.5H7.5V11.8H5.8V9.5H7.5V7.3c0-1.8 1.4-3.3 3.2-3.3H12.5V6.5Z" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {restaurant.name}. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
