import { restaurant, hours, amenities } from "../data/restaurant";
import Icon from "./Icon";

export default function LocationSection() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${restaurant.address.line1}, ${restaurant.address.line2}`
  )}&output=embed`;

  return (
    <section id="localizacao" className="bg-panel py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <span className="inline-flex w-fit items-center rounded-full bg-accent-tint px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-accent">
              Onde Estamos
            </span>
            <h2 className="mt-3 text-[1.9rem] sm:text-[2.4rem]">
              Encontre-nos em Matosinhos
            </h2>

            <div className="mt-8 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream">
                  <Icon name="map-pin" className="h-4 w-4 text-accent" />
                </span>
                <div>
                  <p className="font-semibold text-ink">Endereço Principal</p>
                  <p className="text-sm text-soft">
                    {restaurant.address.line1}, {restaurant.address.line2}
                  </p>
                  <a
                    href={restaurant.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-accent underline underline-offset-2"
                  >
                    Como chegar (Google Maps)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream">
                  <Icon name="clock" className="h-4 w-4 text-accent" />
                </span>
                <div>
                  <p className="font-semibold text-ink">Horário de Funcionamento</p>
                  {hours.map((row) => (
                    <p key={row.label} className="text-sm text-soft">
                      {row.label.replace(" — todos os dias", "")}:{" "}
                      <span className="[font-variant-numeric:tabular-nums]">{row.time}</span>
                    </p>
                  ))}
                  <p className="mt-1 text-xs text-soft">
                    Conforme indicado no TheFork — confirme por telefone em
                    datas especiais.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream">
                  <Icon name="phone" className="h-4 w-4 text-accent" />
                </span>
                <div>
                  <p className="font-semibold text-ink">Contacto</p>
                  <a href={restaurant.phoneHref} className="text-sm text-soft hover:text-accent">
                    +351 {restaurant.phoneDisplay}
                  </a>
                  <p>
                    <a
                      href={restaurant.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-soft hover:text-accent"
                    >
                      {restaurant.instagramHandle}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {amenities.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-cream px-3.5 py-1.5 text-xs font-medium text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="h-[320px] w-full overflow-hidden rounded-2xl border border-hairline sm:h-[400px] lg:h-full">
            <iframe
              title={`Mapa — ${restaurant.name}`}
              src={mapSrc}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
