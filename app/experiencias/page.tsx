import Image from "next/image";
import Reveal from "@/components/Reveal";

const experiences = [
  {
    img: "/images/lazer/piscina02.jpg",
    alt: "Piscina ao ar livre com deck de madeira e vista para as colinas",
    title: "Piscina",
    text: "Deck de madeira com vista para as colinas da Canastra.",
  },
  {
    img: "/images/lazer/fogueira01.jpeg",
    alt: "Fogueira à noite com cadeiras de madeira ao redor",
    title: "Fogueira",
    text: "Cadeiras de madeira ao redor do fogo para noites tranquilas.",
  },
  {
    img: "/images/lazer/rio.jpg",
    alt: "Prainha do Rio São Francisco a poucos minutos da propriedade",
    title: "Rio São Francisco",
    text: "Acesso à prainha do rio, a poucos minutos da propriedade.",
  },
  {
    img: "/images/lazer/salao2.jpg",
    alt: "Salão rústico de madeira usado para refeições e eventos",
    title: "Salão e área de churrasco",
    text: "Espaço de convivência para refeições e encontros.",
  },
  {
    img: "/images/cafe/cafe01.jpg",
    alt: "Mesa de café da manhã com cestas de pães caseiros",
    title: "Café da manhã colonial",
    text: "Quitandas caseiras e sabores da região, servidos com calma.",
  },
  {
    img: "/images/paisagem/vista05.jpeg",
    alt: "Lagoa da propriedade ao entardecer",
    title: "Lagos e natureza",
    text: "Dois lagos na propriedade cercados de silêncio e verde.",
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
      <section className="section experiences-grid" style={{ paddingTop: 0 }}>
        <div className="container">
          {experiences.map((e) => (
            <Reveal key={e.img} className="experience-card">
              <figure className="experience-figure">
                <Image
                  src={e.img}
                  alt={e.alt}
                  width={1600}
                  height={1200}
                  loading="lazy"
                  sizes="(max-width: 759px) 100vw, 50vw"
                />
                <figcaption className="experience-caption">
                  <span className="eyebrow" style={{ color: "var(--color-earth)" }}>
                    {e.title}
                  </span>
                  <p className="experience-text">{e.text}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
      <Reveal style={{ marginTop: "3rem" }}>
        <p className="muted">
          Na propriedade também vivem pavões, galinhas, gansos, pôneis, cavalos e vacas.
          Passeios a cavalo são feitos mediante agendamento — veja a página de cavalgadas.
        </p>
      </Reveal>
    </>
  );
}