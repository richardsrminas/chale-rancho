import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import Reveal from "@/components/Reveal";
import { accommodations, amenities, breakfast, gallery, horseFeature, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Chalés do Rancho | Hospedagem e lazer na Serra da Canastra",
  description:
    "Pousada na Serra da Canastra, em Vargem Bonita (MG). Chalés privativos, piscina, fogueira, café da manhã colonial e a Cavalgada Amigos do Rancho Canastra.",
};

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="booking" id="consulta" aria-label="Consulta de hospedagem">
        <div className="container">
          <BookingForm />
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <Reveal className="split-media">
            <Image
              src="/images/propriedade/placa01.jpg"
              alt="Letreiro de madeira do Chalés do Rancho ao entardecer"
              width={576}
              height={768}
            />
          </Reveal>
          <Reveal className="split-copy">
            <span className="eyebrow">A pousada</span>
            <h2 className="h2">Um lugar para desacelerar e aproveitar a Canastra.</h2>
            <p className="lead">
              Na entrada de Vargem Bonita, a primeira cidade banhada pelo Rio São Francisco,
              o Chalés do Rancho é um refúgio rural com chalés privativos, lazer ao ar livre
              e a hospitalidade mineira de sempre.
            </p>
            <Link href="/acomodacoes" className="link-editorial">
              Conheça as acomodações
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-label="Acomodações">
        <div className="container">
          <Reveal className="section-head split">
            <div>
              <span className="eyebrow">Acomodações</span>
              <h2 className="h2">
                Conforto e tranquilidade para descansar depois de um dia de descobertas.
              </h2>
            </div>
            <p className="muted">
              Chalés privativos com ar-condicionado, TV, Wi-Fi, frigobar, ventilador de teto
              e varanda com vista. Algumas unidades contam com cozinha completa.
            </p>
          </Reveal>
          <div className="gallery-grid">
            {accommodations.slice(0, 4).map((a) => (
              <Reveal as="figure" key={a.img}>
                <Image src={a.img} alt={a.alt} width={800} height={800} loading="lazy" />
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/acomodacoes" className="btn btn-secondary">
              Ver todas as acomodações
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-label="Cavalgada destaque">
        <div className="container">
          <Reveal>
            <div className="feature-horse">
              <Image
                src="/images/cavalgada/cavalgada-grupo.jpg"
                alt="Grupo de cavaleiros reunido em uma colina da Serra da Canastra durante a Cavalgada Amigos do Rancho Canastra"
                fill
                sizes="100vw"
                loading="lazy"
              />
              <div className="feature-horse-content">
                <span className="eyebrow">{horseFeature.eyebrow}</span>
                <h2>{horseFeature.title}</h2>
                <p>{horseFeature.text}</p>
                <Link href={horseFeature.cta.href} className="btn btn-light">
                  {horseFeature.cta.label}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-forest" aria-label="Experiências e lazer">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow" style={{ color: "var(--color-earth)" }}>
              Experiências
            </span>
            <h2 className="h2">Lazer e sabores da propriedade.</h2>
          </Reveal>
          <ol className="amenity-list">
            {amenities.map((a, i) => (
              <Reveal as="li" key={a.title}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <div className="amenity-media">
                  <Image src={a.img} alt={a.text} width={480} height={320} loading="lazy" />
                </div>
                <div>
                  <strong>{a.title}</strong>
                  <small>{a.text}</small>
                </div>
              </Reveal>
            ))}
          </ol>
          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/experiencias" className="btn btn-light">
              Explorar experiências
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-label="Café da manhã">
        <div className="container">
          <Reveal className="section-head split">
            <div>
              <span className="eyebrow">Café da manhã colonial</span>
              <h2 className="h2">Quitandas caseiras para começar o dia com calma.</h2>
            </div>
            <p className="muted">
              Pães, bolos e sabores da região feitos na casa, servidos todos os dias como parte
              da estadia.
            </p>
          </Reveal>
          <div className="gallery-grid">
            {breakfast.map((b) => (
              <Reveal as="figure" key={b.img} className={b.wide ? "wide" : ""}>
                <Image
                  src={b.img}
                  alt={b.alt}
                  width={b.wide ? 1600 : 800}
                  height={b.wide ? 1200 : 800}
                  loading="lazy"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Galeria da propriedade">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">A propriedade</span>
            <h2 className="h2">Momentos reais do rancho.</h2>
          </Reveal>
          <div className="gallery-grid">
            {gallery.map((g) => (
              <Reveal as="figure" key={g.img} className={g.wide ? "wide" : ""}>
                <Image
                  src={g.img}
                  alt={g.alt}
                  width={g.wide ? 1600 : 800}
                  height={g.wide ? 1200 : 800}
                  loading="lazy"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-label="Localização">
        <div className="container location-grid">
          <Reveal>
            <span className="eyebrow">Localização</span>
            <h2 className="h2">Entrada de Vargem Bonita, Serra da Canastra.</h2>
            <dl className="location-facts" style={{ marginTop: "1.5rem" }}>
              <div>
                <dt>Endereço</dt>
                <dd>
                  {site.address.label}
                  <br />
                  {site.address.city}
                </dd>
              </div>
              <div>
                <dt>Rota</dt>
                <dd>
                  <a
                    className="link-editorial"
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir rota no Google Maps
                  </a>
                </dd>
              </div>
            </dl>
            <div style={{ marginTop: "1.5rem" }}>
              <Link href="/localizacao" className="btn btn-secondary">
                Ver página de localização
              </Link>
            </div>
          </Reveal>
          <Reveal className="map-frame">
            <iframe
              title="Mapa — Chalés do Rancho, Sítio São Tiago, BR-146"
              src={site.mapsUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>

      <section className="section section-forest cta-final" aria-label="Consulta">
        <div className="container">
          <Reveal>
            <span className="eyebrow" style={{ color: "var(--color-earth)" }}>
              Planeje sua estadia
            </span>
            <h2 className="h2">Conte as datas da sua viagem e a gente responde no WhatsApp.</h2>
            <Link href="#consulta" className="btn btn-light">
              Consultar disponibilidade
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
