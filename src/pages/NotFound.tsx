import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Página não encontrada — Ópina");

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <span className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-accent">
        Erro 404
      </span>
      <h1 className="mt-2 text-[2.4rem] font-semibold">Página não encontrada</h1>
      <p className="mt-3 max-w-[46ch] text-soft">
        A página que procuras não existe ou foi movida.
      </p>
      <Link
        to="/"
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accentc"
      >
        Voltar ao início
      </Link>
    </section>
  );
}
