import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, LayoutGroup, motion, useInView, useReducedMotion } from "framer-motion";
import { specialties } from "../data/specialties";
import { RevealGroup, RevealItem } from "./Reveal";
import { ease, easeInOut, fadeUp, springSoft } from "../lib/motion";

const AUTOPLAY_MS = 5000;
const pad = (n: number) => String(n).padStart(2, "0");

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

export default function Specialties() {
  // `stamp` grows on every change so the incoming photo always stacks above the outgoing one.
  const [{ active, stamp }, setState] = useState({ active: 0, stamp: 0 });
  const [hovering, setHovering] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const onScreen = useInView(sectionRef, { amount: 0.3 });
  const reduce = useReducedMotion();
  const desktopHover = useMediaQuery("(min-width: 1024px) and (hover: hover)");

  const select = (i: number) =>
    setState((s) => (s.active === i ? s : { active: i, stamp: s.stamp + 1 }));
  const next = () => select((active + 1) % specialties.length);

  const autoplay = !reduce && !interacted;
  const paused = hovering || !onScreen;
  const current = specialties[active];

  // Decode every photo up front so switching never flashes an empty frame.
  useEffect(() => {
    specialties.forEach((d) => {
      new Image().src = d.image;
    });
  }, []);

  return (
    <section ref={sectionRef} id="carta" className="border-y border-hairline">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-10 px-6 py-[clamp(64px,9vw,120px)] lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-20">
        <RevealGroup gap={0.07}>
          <RevealItem>
            <span className="kicker mb-6 block">02 — Da Cozinha</span>
          </RevealItem>

          <LayoutGroup>
            <ul
              className="m-0 list-none p-0"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              {specialties.map((d, i) => {
                const isActive = i === active;
                return (
                  <motion.li key={d.name} variants={fadeUp} className="relative border-b border-hairline">
                      <button
                        type="button"
                        aria-expanded={isActive}
                        aria-controls={`especialidade-${i}`}
                        onClick={() => {
                          select(i);
                          setInteracted(true);
                        }}
                        onMouseEnter={desktopHover ? () => select(i) : undefined}
                        onFocus={() => setHovering(true)}
                        onBlur={() => setHovering(false)}
                        className="relative grid w-full grid-cols-[32px_1fr] items-baseline gap-x-3 gap-y-1 py-[18px] text-left sm:grid-cols-[44px_1fr_auto] sm:gap-x-4"
                      >
                        {isActive && (
                          <motion.span
                            layoutId="especialidade-marcador"
                            aria-hidden="true"
                            className="absolute -left-3 bottom-4 top-4 w-[2px] bg-accent sm:-left-5"
                            transition={springSoft}
                          />
                        )}
                        <span
                          className={`text-[13px] transition-colors duration-300 [font-feature-settings:'tnum'] ${
                            isActive ? "text-accent" : "text-soft"
                          }`}
                        >
                          {pad(i + 1)}
                        </span>
                        <motion.span
                          animate={{ x: isActive ? 8 : 0 }}
                          transition={springSoft}
                          className={`block font-display text-[clamp(28px,3.2vw,42px)] leading-[1.05] transition-colors duration-300 ${
                            isActive ? "text-accent" : "text-ink"
                          }`}
                        >
                          {d.name}
                        </motion.span>
                        <span className="col-start-2 text-[11px] uppercase tracking-[0.14em] text-soft sm:col-start-auto">
                          {d.tag}
                        </span>
                      </button>

                      {/* Phones & tablets: the active dish opens in place with its photo. */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            id={`especialidade-${i}`}
                            key="detalhe"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.45, ease }}
                            className="overflow-hidden lg:hidden"
                          >
                            <div className="flex items-start gap-4 pb-6 pl-[44px] sm:pl-[60px]">
                              <motion.img
                                src={d.image}
                                alt={d.name}
                                initial={{ scale: 1.12, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease }}
                                className="plate aspect-[4/5] w-[40%] max-w-[170px] shrink-0 object-cover"
                              />
                              <p className="m-0 max-w-[46ch] text-sm leading-[1.65] text-[#444141]">
                                {d.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {autoplay && isActive && (
                        <span
                          key={stamp}
                          aria-hidden="true"
                          className="op-progress pointer-events-none absolute bottom-[-1px] left-0 h-px w-full bg-accent"
                          style={{
                            animationDuration: `${AUTOPLAY_MS}ms`,
                            animationPlayState: paused ? "paused" : "running",
                          }}
                          onAnimationEnd={next}
                        />
                      )}
                  </motion.li>
                );
              })}
            </ul>
          </LayoutGroup>

          <RevealItem className="mt-9">
            <Link to="/menu" className="btn btn-secondary group">
              Ver a carta completa
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </RevealItem>
        </RevealGroup>

        {/* Desktop: a compact, sticky plate that wipes to the selected dish. */}
        <motion.aside
          aria-live="polite"
          className="hidden lg:sticky lg:top-[120px] lg:block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="mb-3 flex items-baseline justify-between">
            <span className="kicker kicker-muted inline-flex overflow-hidden [font-feature-settings:'tnum']">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={active}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.45, ease }}
                  className="inline-block"
                >
                  {pad(active + 1)}
                </motion.span>
              </AnimatePresence>
              &nbsp;/ {pad(specialties.length)}
            </span>
            <span className="kicker">{current.tag}</span>
          </div>

          <div className="plate relative aspect-[4/5] w-full overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.img
                key={active}
                src={current.image}
                alt={current.name}
                style={{ zIndex: stamp }}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ clipPath: "inset(100% 0% 0% 0%)", scale: 1.18 }}
                animate={{
                  clipPath: "inset(0% 0% 0% 0%)",
                  scale: 1,
                  transition: {
                    clipPath: { duration: 0.85, ease: easeInOut },
                    scale: { duration: 1.4, ease },
                  },
                }}
                exit={{ opacity: 0, transition: { delay: 0.8, duration: 0.1 } }}
              />
            </AnimatePresence>
          </div>

          <div className="mt-4 min-h-[4.5em]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={active}
                className="m-0 text-sm leading-[1.65] text-[#444141]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease, delay: 0.15 } }}
                exit={{ opacity: 0, y: -6, transition: { duration: 0.2 } }}
              >
                {current.description}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
