import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CavalgadaCTA from "@/components/CavalgadaCTA";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cavalgada Amigos do Rancho Canastra",
  description:
    "Cavalgada Amigos do Rancho Canastra: passeios a cavalo pela Serra da Canastra saindo da pousada. Consulte datas, programação e inscrições pelo WhatsApp.",
};

const gallery = [
  {
    img: "/images/cavalgada/cavalgada-grupo.jpg",
    alt: "Grupo de cavaleiros alinhado em uma colina da Serra da Canastra",
    wide: true,
  },
  {
    img: "/images/cavalgada/cavalgada-rio.jpg",
    alt: "Cavaleiros atravessando o rio de mãos dadas durante a cavalgada",
  },
];

const faqs = [
  {
    q: "Preciso ter experiência com cavalos?",
    a: "As cavalgadas contam com acompanhamento da equipe do rancho. Os detalhes de nível de experiência e requisitos são informados no contato pelo WhatsApp.",
  },
  {
    q: "Há datas fixas de cavalgada?",
    a: "O calendário de cavalgadas e eventos é atualizado junto ao Instagram oficial e confirmado diretamente com a equipe. Consulte pelo WhatsApp para saber as próximas oportunidades.",
  },
  {
    q: "Posso participar sem estar hospedado?",
    a: "A participação e as condições são confirmadas diretamente com a organização da cavalgada pelo WhatsApp.",
  },
];

export default function CavalgadasPage() {
  return (
    <>
      <section className="hero" style={{ minHeight: "82svh" }} aria-label="Cavalgada">
        <div className="hero-media">
          <video
            className="mobile-only"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/cavalgada/cavalgada-grupo.jpg"
            aria-hidden="true"
          >
            <source src="/videos/video-cavalgada1.mp4" type="video/mp4" />
          </video>
          <video
            className="desktop-only"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/cavalgada/cavalgada-grupo.jpg"
            aria-hidden="true"
            style={{ objectFit: "contain", background: "var(--color-forest)" }}
          >
            <source src="/videos/video-cavalgada2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container hero-content">
          <span className="eyebrow">Experiência carro-chefe</span>
          <h1 className="hero-title">Cavalgada Amigos do Rancho Canastra</h1>
          <p className="hero-sub">
            A Canastra tem outro ritmo quando vista da sela.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <Reveal className="split-copy">
            <span className="eyebrow">A experiência</span>
            <h2 className="h2">Rios, matas e o horizonte da serra.</h2>
            <p className="lead">
              As cavalgadas do rancho atravessam paisagens reais da Canastra com o
              acompanhamento da equipe local. Para datas, programação, valores e inscrições,
              fale diretamente com a gente.
            </p>
            <CavalgadaCTA />
          </Reveal>
          <Reveal className="split-media">
            <Image
              src="/images/cavalgada/cavalgada-rio.jpg"
              alt="Cavaleiros atravessando o rio durante a cavalgada"
              width={576}
              height={768}
              priority
            />
          </Reveal>
        </div>
      </section>

      <section className="section section-forest">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow" style={{ color: "var(--color-earth)" }}>
              Galeria
            </span>
            <h2 className="h2">Momentos reais das cavalgadas.</h2>
          </Reveal>
          <div className="gallery-grid">
            {gallery.map((g) => (
              <Reveal as="figure" key={g.img} className={g.wide ? "wide" : ""}>
                <Image
                  src={g.img}
                  alt={g.alt}
                  width={g.wide ? 1600 : 800}
                  height={g.wide ? 1200 : 1000}
                  loading="lazy"
                />
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <a
              className="btn btn-light"
              href={site.instagramCavalgada}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver mais no Instagram das cavalgadas
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2 className="h2">Antes de montar na sela.</h2>
          </Reveal>
          <div className="faq">
            {faqs.map((f) => (
              <Reveal as="div" key={f.q}>
                <details>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: "3rem" }}>
            <CavalgadaCTA />
          </div>
        </div>
      </section>
    </>
  );
}
