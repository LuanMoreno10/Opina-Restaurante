import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import PageLoader from "./PageLoader";

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#conteudo"
        className="btn btn-primary fixed left-4 top-3 z-[70] -translate-y-20 bg-bg focus-visible:translate-y-0"
      >
        Saltar para o conteúdo
      </a>
      <Header />
      <main id="conteudo" className="flex-1">
        {/* Header and footer stay put while a page's code loads. */}
        <Suspense fallback={<PageLoader />}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            <Outlet />
          </motion.div>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
