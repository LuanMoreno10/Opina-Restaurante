import { restaurant, hours, amenities } from "../data/restaurant";

const iconProps = {
  width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "var(--accent)",
  strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true,
};

export default function LocationSection() {
  return (
    <section id="localizacao" className="mx-auto max-w-[1240px] px-6 py-[clamp(64px,9vw,120px)]">
      <span className="kicker">04 — Visitar</span>
      <div className="mt-7 grid grid-cols-1 gap-9 border-t border-hairline pt-7 sm:grid-cols-3">
        <div className="flex flex-col gap-2">
          <svg {...iconProps}><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
          <h4 className="mt-2 text-[22px] font-semibold">Morada</h4>
          <p className="m-0 leading-relaxed">{restaurant.address.line1}<br />{restaurant.address.line2}</p>
          <a href={restaurant.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm">Como chegar</a>
        </div>

        <div className="flex flex-col gap-2">
          <svg {...iconProps}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
          <h4 className="mt-2 text-[22px] font-semibold">Horário</h4>
          {hours.map((row, i) => (
            <div key={row.days} className={`flex justify-between gap-4 ${i < hours.length - 1 ? "border-b border-hairline pb-1" : ""}`}>
              <span>{row.days}</span>
              {row.times.length > 0 ? (
                <span className="text-right [font-feature-settings:'tnum']">
                  {row.times.map((t) => <span key={t} className="block">{t}</span>)}
                </span>
              ) : (
                <span className="text-soft">Encerrado</span>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <svg {...iconProps}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          <h4 className="mt-2 text-[22px] font-semibold">Contacto</h4>
          <a href={restaurant.phoneHref} className="text-ink no-underline [font-feature-settings:'tnum']">+351 {restaurant.phoneDisplay}</a>
          <a href={restaurant.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-ink no-underline">{restaurant.instagramHandle}</a>
          <div className="mt-2 flex flex-wrap gap-2">
            {amenities.slice(0, 3).map((a) => <span key={a} className="tag-outline">{a}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
