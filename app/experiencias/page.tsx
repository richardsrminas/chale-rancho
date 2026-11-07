import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { amenities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Lazer e experiências",
  description:
    "Piscina, fogueira, lagos, prainha do Rio São Francisco, café da manhã colonial e animais na propriedade do Chalés do Rancho, na Serra da Canastra.",
};

const more = [
  {
    img: "/images/lazer/salao2.jpg",
    alt: "Salão rústico de madeira usado para refeições e eventos",
    title: "Salão e área de churrasco",
  },
  {
    img: "/images/lazer/fogueira.jpg",
    alt: "Fogueira com cadeiras de madeira durante o dia",
    title: "Fogueira ao ar livre",
  },
  {
    img: "/images/paisagem/vista05.jpeg",
    alt: "Lagoa da propriedade ao entardecer",
    title: "Dois lagos na propriedade",
  },
  {
    img: "/images/cafe/cafe01.jpg",
    alt: "Mesa de café da manhã com cestas de pães caseiros",
    title: "Quitandas caseiras",
  },
];

export default function ExperienciasPage() {
  return (
    <>
      <div className="container page-hero">
        <span className="eyebrow">Experiências</span>
        <h1 className="h1">Lazer e sabores na propriedade.</h1>
        <p className="lead">
         Piscina, fogueira, lagos, rio e um café da manhã que sabe a Minas Gerais.
        </p>
      </div>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="gallery-grid">
            {amenities.map((a) => (
              <Reveal as="figure" key={a.title}>
                <Image src={a.img} alt={a.text} width={800} height={800} loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Mais da estadia</span>
            <h2 className="h2">Para viver sem pressa.</h2>
          </Reveal>
          <div className="gallery-grid">
            {more.map((m, i) => (
              <Reveal as="figure" key={m.title} className={i === 0 ? "wide" : ""}>
                <Image
                  src={m.img}
                  alt={m.alt}
                  width={i === 0 ? 1600 : 800}
                  height={i === 0 ? 1200 : 800}
                  loading="lazy"
                />
              </Reveal>
            ))}
          </div>
          <Reveal style={{ marginTop: "2.5rem" }}>
            <p className="muted">
              Na propriedade também vivem pavões, galinhas, gansos, pôneis, cavalos e vacas.
              Passeios a cavalo são feitos mediante agendamento — veja a página de cavalgadas.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
