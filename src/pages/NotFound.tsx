import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { usePageTitle } from "../hooks/usePageTitle";
import { fadeUp, stagger } from "../lib/motion";

export default function NotFound() {
  usePageTitle("Página não encontrada — Ópina");

  return (
    <motion.section
      className="mx-auto flex min-h-[60vh] max-w-[1240px] flex-col items-center justify-center px-6 py-20 text-center"
      initial="hidden"
      animate="show"
      variants={stagger(0.1)}
    >
      <motion.span variants={fadeUp} className="kicker">Erro 404</motion.span>
      <motion.h1 variants={fadeUp} className="mt-4 text-[clamp(44px,7vw,84px)]">
        Página não encontrada
      </motion.h1>
      <motion.p variants={fadeUp} className="mt-4 max-w-[46ch] text-soft">
        A página que procura não existe ou foi movida.
      </motion.p>
      <motion.div variants={fadeUp} className="mt-8">
        <Link to="/" className="btn btn-primary">Voltar ao início</Link>
      </motion.div>
    </motion.section>
  );
}
