import { useState } from "react";
import { Link } from "react-router-dom";
import { specialties } from "../data/specialties";

export default function Specialties() {
  const [active, setActive] = useState(0);

  return (
    <section id="carta" className="border-y border-hairline">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-9 px-6 py-[clamp(64px,9vw,120px)] lg:grid-cols-2">
        <div className="flex flex-col">
          <span className="kicker mb-7">02 — Da Cozinha</span>
          {specialties.map((d, i) => {
            const isActive = i === active;
            return (
              <button
                key={d.name}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="grid grid-cols-[32px_1fr] items-baseline gap-x-3 gap-y-1 border-b border-hairline py-[18px] text-left sm:grid-cols-[44px_1fr_auto] sm:gap-4"
              >
                <span className="text-[13px] text-soft [font-feature-settings:'tnum']">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className={`block font-display text-[clamp(28px,3.2vw,42px)] leading-[1.05] transition-colors duration-300 ${isActive ? "text-accent" : "text-ink"}`}>
                    {d.name}
                  </span>
                  {isActive && (
                    <span className="animate-rise mt-2 block max-w-[46ch] text-sm leading-[1.65] text-[#444141]">
                      {d.description}
                    </span>
                  )}
                </span>
                <span className="col-start-2 text-[11px] uppercase tracking-[0.14em] text-soft sm:col-start-auto">{d.tag}</span>
              </button>
            );
          })}
          <div className="mt-9">
            <Link to="/menu" className="btn btn-secondary">Ver a carta completa</Link>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full lg:sticky lg:top-[110px]">
          {specialties.map((d, i) => (
            <img
              key={d.name}
              src={d.image}
              alt={d.name}
              loading={i === 0 ? "eager" : "lazy"}
              className={`plate absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[600ms,1200ms] ease-[cubic-bezier(.2,.7,.2,1)] ${
                i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
