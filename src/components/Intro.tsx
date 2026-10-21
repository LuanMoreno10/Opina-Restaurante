import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/images/opina-logo.svg";
import { ease, easeInOut } from "../lib/motion";

const SEEN_KEY = "opina-intro-seen";
/** How long the logo holds before the curtain lifts. Keep it short. */
const HOLD_MS = 950;

const IntroContext = createContext(true);

/** True once the entrance intro has finished (or was skipped). */
export function useIntroDone() {
  return useContext(IntroContext);
}

function shouldPlay() {
  try {
    if (sessionStorage.getItem(SEEN_KEY)) return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    return true;
  } catch {
    return false;
  }
}

export function IntroProvider({ children }: { children: ReactNode }) {
  const [playing, setPlaying] = useState(shouldPlay);
  const [done, setDone] = useState(!playing);

  useEffect(() => {
    if (!playing) return;
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* private mode — the intro just plays again next time */
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => setPlaying(false), HOLD_MS);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = previousOverflow;
    };
  }, [playing]);

  return (
    <IntroContext.Provider value={done}>
      {children}
      <AnimatePresence onExitComplete={() => setDone(true)}>
        {playing && (
          <motion.div
            key="intro"
            aria-hidden="true"
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-5 bg-bg"
            exit={{ y: "-100%", transition: { duration: 0.7, ease: easeInOut } }}
          >
            <motion.img
              src={logo}
              alt=""
              className="w-[min(56vw,300px)]"
              initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease }}
            />
            <motion.span
              className="kicker kicker-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Peixe &amp; Marisco · Matosinhos
            </motion.span>
            <motion.span
              className="h-px w-[min(40vw,180px)] origin-left bg-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: HOLD_MS / 1000, ease }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </IntroContext.Provider>
  );
}
