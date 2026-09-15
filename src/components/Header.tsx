import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { restaurant } from "../data/restaurant";

const links = [
  { to: "/", label: "Início", end: true },
  { to: "/menu", label: "Menu" },
  { to: "/galeria", label: "Galeria" },
  { to: "/contactos", label: "Contactos" },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition-colors hover:text-accent ${
    isActive ? "text-accent" : "text-ink"
  }`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-bg/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link to="/" className="flex flex-col gap-0.5 leading-none">
          <span className="font-display text-2xl font-black text-accent">
            {restaurant.name}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-secondary">
            Peixe &amp; Marisco
          </span>
        </Link>

        <nav className="hidden gap-9 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={restaurant.phoneHref}
            className="hidden rounded-lg border border-hairline px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent lg:inline-flex"
          >
            {restaurant.phoneDisplay}
          </a>
          <a
            href={restaurant.theForkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-accentc transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Reservar
          </a>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-hairline text-ink md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-nav" hidden={!menuOpen} className="border-t border-hairline bg-bg md:hidden">
        <nav className="flex flex-col gap-1 px-5 py-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2.5 text-base font-medium ${
                  isActive ? "bg-cream text-accent" : "text-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a href={restaurant.phoneHref} className="rounded-lg px-3 py-2.5 text-base font-medium text-ink">
            Ligar: {restaurant.phoneDisplay}
          </a>
          <a
            href={restaurant.theForkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-accentc"
          >
            Reservar no TheFork
          </a>
        </nav>
      </div>
    </header>
  );
}
