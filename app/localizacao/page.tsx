import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Como chegar",
  description:
    "Chalés do Rancho fica no Sítio São Tiago, BR-146, entre Vargem Bonita e São Roque de Minas (MG), na entrada da Serra da Canastra. Veja a rota no Google Maps.",
};

export default function LocalizacaoPage() {
  return (
    <>
      <div className="container page-hero">
        <span className="eyebrow">Localização</span>
        <h1 className="h1">Entrada de Vargem Bonita, Serra da Canastra.</h1>
        <p className="lead">
          Vargem Bonita é a primeira cidade banhada pelo Rio São Francisco — e a porta de
          entrada da Canastra.
        </p>
      </div>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container location-grid">
          <Reveal>
            <dl className="location-facts">
              <div>
                <dt>Endereço</dt>
                <dd>
                  {site.address.label}
                  <br />
                  {site.address.city}
                </dd>
              </div>
              <div>
                <dt>Região</dt>
                <dd>Serra da Canastra — Minas Gerais, Brasil</dd>
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
              <div>
                <dt>Instagram</dt>
                <dd>
                  <a
                    className="link-editorial"
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @chalesdorancho.canastra
                  </a>
                </dd>
              </div>
            </dl>
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
    </>
  );
}
