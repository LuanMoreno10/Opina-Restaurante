import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { restaurant, hours } from "../data/restaurant";
import logo from "../assets/images/opina-logo.svg";

interface NavItem {
  to: string;
  label: string;
  end?: boolean;
}

const links: NavItem[] = [
  { to: "/menu", label: "Carta" },
  { to: "/galeria", label: "Galeria" },
  { to: "/contactos", label: "Contactos" },
];

const mobileLinks: NavItem[] = [{ to: "/", label: "Início", end: true }, ...links];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-display text-[17px] no-underline transition-colors hover:text-accent ${
    isActive ? "text-accent" : "text-ink"
  }`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const { pathname } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname]);

  // Get out of the way while reading down the page; come back on any scroll up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(y > 8);
    if (Math.abs(y - previous) < 4) return;
    setHidden(y > previous && y > 160);
  });

  // The panel sits under the header, so it needs the header's real height.
  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const update = () => setHeaderHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus({ preventScroll: true });
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  // Close the panel if the viewport grows into the desktop layout.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <motion.header
      ref={headerRef}
      animate={{ y: hidden && !menuOpen ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
      className={`sticky top-0 z-40 border-b bg-bg/90 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ${
        scrolled ? "border-hairline shadow-[0_6px_24px_-18px_rgba(32,31,29,0.35)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-[18px]">
        <nav className="hidden gap-7 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button
          ref={toggleRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((o) => !o)}
          className="relative -ml-2.5 inline-flex h-11 w-11 items-center justify-center justify-self-start rounded-full text-ink transition-colors hover:bg-accent-tint md:hidden"
        >
          <span aria-hidden="true" className="relative block h-3 w-[22px]">
            <span
              className={`absolute left-0 h-[1.5px] w-full rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] ${
                menuOpen ? "top-[5px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-[1.5px] rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(.2,.7,.2,1)] ${
                menuOpen ? "top-[5px] w-full -rotate-45" : "top-[10px] w-[14px]"
              }`}
            />
          </span>
        </button>

        <Link to="/" className="flex flex-col items-center leading-none no-underline">
          <img src={logo} alt={restaurant.name} className="h-[34px] w-auto" />
          <span className="mt-[3px] text-[9.5px] uppercase tracking-[0.22em] text-soft">
            Peixe &amp; Marisco
          </span>
        </Link>

        <div className="flex items-center justify-end gap-4">
          <a href={restaurant.phoneHref} className="hidden text-sm text-ink no-underline [font-feature-settings:'tnum'] lg:inline">
            {restaurant.phoneDisplay}
          </a>
          <a href={restaurant.theForkUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Reservar
          </a>
        </div>
      </div>

      {createPortal(
        <div
          id="mobile-nav"
          aria-hidden={!menuOpen}
          style={{ paddingTop: headerHeight }}
          // Visibility flips instantly on open (so focus can land) but waits for
          // the fade on close.
          className={`fixed inset-0 z-30 flex flex-col bg-bg duration-300 md:hidden ${
            menuOpen
              ? "visible opacity-100 transition-opacity"
              : "invisible opacity-0 transition-[opacity,visibility]"
          }`}
        >
          <nav
            aria-label="Menu principal"
            className={`flex flex-1 flex-col overflow-y-auto px-6 pb-6 pt-4 transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] ${
              menuOpen ? "translate-y-0" : "-translate-y-3"
            }`}
          >
            <ul className="m-0 list-none p-0">
              {mobileLinks.map((link, i) => (
                <li
                  key={link.to}
                  className={menuOpen ? "animate-rise" : ""}
                  style={{ animationDelay: `${80 + i * 55}ms` }}
                >
                  <NavLink
                    ref={i === 0 ? firstLinkRef : undefined}
                    to={link.to}
                    end={link.end}
                    tabIndex={menuOpen ? 0 : -1}
                    className={({ isActive }) =>
                      `group flex items-baseline gap-4 border-b border-hairline py-[14px] no-underline ${
                        isActive ? "text-accent" : "text-ink"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="w-6 text-[12px] text-soft [font-feature-settings:'tnum']">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[clamp(34px,10vw,44px)] leading-none">
                          {link.label}
                        </span>
                        {isActive ? (
                          <span aria-hidden="true" className="ml-auto h-2 w-2 self-center rounded-full bg-accent" />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="ml-auto font-display text-2xl text-soft transition-transform group-hover:translate-x-1"
                          >
                            →
                          </span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div
              className={`mt-auto flex flex-col gap-6 pt-10 ${menuOpen ? "animate-rise" : ""}`}
              style={{ animationDelay: `${80 + mobileLinks.length * 55}ms` }}
            >
              <a
                href={restaurant.theForkUrl}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={menuOpen ? 0 : -1}
                className="btn btn-primary h-12 w-full text-[17px]"
              >
                Reservar no TheFork
              </a>

              <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-hairline pt-6 text-sm">
                <div>
                  <span className="kicker kicker-muted mb-1 block !text-[10.5px]">Telefone</span>
                  <a
                    href={restaurant.phoneHref}
                    tabIndex={menuOpen ? 0 : -1}
                    className="text-ink no-underline [font-feature-settings:'tnum']"
                  >
                    {restaurant.phoneDisplay}
                  </a>
                </div>
                <div>
                  <span className="kicker kicker-muted mb-1 block !text-[10.5px]">Horário</span>
                  {hours.map((row) => (
                    <span key={row.days} className="mb-1 block text-ink [font-feature-settings:'tnum'] last:mb-0">
                      <span className="block text-[12px] text-soft">{row.short}</span>
                      {row.times.length > 0
                        ? row.times.map((t) => <span key={t} className="block">{t}</span>)
                        : <span className="block">Encerrado</span>}
                    </span>
                  ))}
                </div>
                <div>
                  <span className="kicker kicker-muted mb-1 block !text-[10.5px]">Morada</span>
                  <a
                    href={restaurant.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={menuOpen ? 0 : -1}
                    className="text-ink no-underline"
                  >
                    {restaurant.address.line1}
                    <br />
                    {restaurant.address.line2}
                  </a>
                </div>
                <div>
                  <span className="kicker kicker-muted mb-1 block !text-[10.5px]">Siga-nos</span>
                  <a
                    href={restaurant.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={menuOpen ? 0 : -1}
                    className="block text-ink no-underline"
                  >
                    Instagram
                  </a>
                  <a
                    href={restaurant.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={menuOpen ? 0 : -1}
                    className="block text-ink no-underline"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>,
        document.body
      )}
    </motion.header>
  );
}
