import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Jumps to the top of the page on every route change (SPA navigation skips this by default). */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}
