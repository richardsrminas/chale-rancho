import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CavalgadaCTA from "@/components/CavalgadaCTA";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cavalgada Amigos do Rancho Canastra",
  description:
    "Cavalgada Amigos do Rancho Canastra: passeios a cavalo pela Serra da Canastra saindo da pousada, com travessia de rio e acompanhamento da equipe do rancho. Consulte datas, programação e inscrições.",
};

const faqs = [
  {
    q: "Preciso ter experiência com cavalos?",
    a: "As cavalgadas contam com o acompanhamento da equipe do rancho. Os detalhes sobre nível de experiência e requisitos são informados no contato direto com a organização.",
  },
  {
    q: "Há datas fixas de cavalgada?",
    a: "O calendário de cavalgadas é atualizado no Instagram oficial e confirmado diretamente com a equipe. Consulte para saber as próximas oportunidades.",
  },
  {
    q: "Posso participar sem estar hospedado?",
    a: "A participação e as condições são confirmadas diretamente com a organização da cavalgada.",
  },
];

export default function CavalgadasPage() {
  return (
    <>
      {/* ---------- Hero cinematográfico ---------- */}
      <section className="hero cav-hero" aria-label="Cavalgada Amigos do Rancho Canastra">
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
            className="desktop-only cav-hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/cavalgada/cavalgada-grupo.jpg"
            aria-hidden="true"
          >
            <source src="/videos/video-cavalgada2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container hero-content">
          <span className="eyebrow">Experiência carro-chefe</span>
          <h1 className="hero-title">Cavalgada Amigos do Rancho Canastra</h1>
          <p className="hero-sub">
            A Canastra tem outro ritmo quando vista da sela — e a gente conduz
            você por esse caminho.
          </p>
          <div className="hero-actions">
            <a className="btn btn-light" href="#participar">
              Quero saber da próxima cavalgada
            </a>
          </div>
        </div>
      </section>

      {/* ---------- A experiência ---------- */}
      <section className="section">
        <div className="container split-section">
          <Reveal className="split-copy">
            <span className="eyebrow">A experiência</span>
            <h2 className="h2">Rios, matas e o horizonte da serra.</h2>
            <p className="lead">
              As cavalgadas do rancho atravessam paisagens reais da Canastra —
              com a travessia do rio — e o acompanhamento da equipe local em
              todos os momentos.
            </p>
            <p className="muted">
              Cada grupo é conduzido pelos nossos guias, que conhecem cada
              trilha da região. É uma experiência de aventura com a segurança e
              a hospitalidade de quem vive aqui.
            </p>
            <CavalgadaCTA />
          </Reveal>
          <Reveal className="split-media cav-media-tall">
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

      {/* ---------- Full-bleed: o grupo ---------- */}
      <section className="cav-fullbleed" aria-label="Grupo de cavaleiros na serra">
        <Image
          src="/images/cavalgada/cavalgada-grupo.jpg"
          alt="Grupo de cavaleiros reunido em uma colina da Serra da Canastra durante a cavalgada"
          width={1600}
          height={1000}
          priority
        />
        <div className="cav-fullbleed-caption container">
          <Reveal>
            <p>
              Cavalgada é sobre o grupo: a conversa na trilha, a travessia
              compartilhada e o horizonte que se abre lá do alto da serra.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- A travessia do rio (destaque) ---------- */}
      <section className="section section-forest">
        <div className="container cav-rio">
          <Reveal className="cav-rio-copy">
            <span className="eyebrow" style={{ color: "var(--color-earth)" }}>
              O momento que fica
            </span>
            <h2 className="h2">A travessia do rio.</h2>
            <p className="lead" style={{ color: "var(--color-ivory)" }}>
              De mãos dadas, o grupo atravessa a água rasa enquanto os cavalos
              seguem firmes. É o instante em que a aventura vira memória
              compartilhada.
            </p>
          </Reveal>
          <Reveal className="cav-rio-media">
            <Image
              src="/images/cavalgada/cavalgada-rio.jpg"
              alt="Cavaleiros atravessando o rio de mãos dadas durante a Cavalgada Amigos do Rancho Canastra"
              width={1200}
              height={800}
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------- Galeria imersiva ---------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Galeria</span>
            <h2 className="h2">Momentos reais das cavalgadas.</h2>
          </Reveal>
          <div className="cav-gallery">
            <Reveal as="figure" className="cav-gallery-item cav-gallery-wide">
              <Image
                src="/images/cavalgada/cavalgada-grupo.jpg"
                alt="Grupo de cavaleiros alinhado em uma colina da Serra da Canastra"
                width={1600}
                height={1000}
                loading="lazy"
              />
              <figcaption>O grupo reunido no alto da serra.</figcaption>
            </Reveal>
            <Reveal as="figure" className="cav-gallery-item cav-gallery-tall">
              <Image
                src="/images/cavalgada/cavalgada-rio.jpg"
                alt="Cavaleiros atravessando o rio durante a cavalgada"
                width={800}
                height={1067}
                loading="lazy"
              />
              <figcaption>A travessia do rio.</figcaption>
            </Reveal>
            <Reveal as="figure" className="cav-gallery-item cav-gallery-video">
              <video
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/cavalgada/cavalgada-rio.jpg"
                aria-label="Vídeo da cavalgada"
              >
                <source src="/videos/video-cavalgada1.mp4" type="video/mp4" />
              </video>
              <figcaption>Um dos percursos, em movimento.</figcaption>
            </Reveal>
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <a
              className="link-editorial"
              href={site.instagramCavalgada}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver mais no Instagram das cavalgadas
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Como participar ---------- */}
      <section className="section cav-participar" id="participar">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Como participar</span>
            <h2 className="h2">Fale com a gente e receba os detalhes.</h2>
          </Reveal>
          <Reveal>
            <p className="lead">
              Datas, programação, valores e inscrições da próxima cavalgada são
              confirmados diretamente com a organização. Envie sua mensagem e a
              equipe responde com todas as informações.
            </p>
          </Reveal>
          <Reveal>
            <div className="cav-participar-cta">
              <CavalgadaCTA />
            </div>
            <p className="muted" style={{ marginTop: "1rem" }}>
              Prefere acompanhar primeiro?{" "}
              <a
                className="link-editorial"
                href={site.instagramCavalgada}
                target="_blank"
                rel="noopener noreferrer"
              >
                Siga @cavalgadamigosdoranchocanastra
              </a>{" "}
              no Instagram.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Perguntas frequentes ---------- */}
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
        </div>
      </section>

      {/* ---------- CTA final ---------- */}
      <section className="section section-forest cav-final">
        <div className="container">
          <Reveal className="cav-final-inner">
            <span className="eyebrow" style={{ color: "var(--color-earth)" }}>
              Próxima cavalgada
            </span>
            <h2 className="h1">A serra está esperando o seu grupo.</h2>
            <p className="lead" style={{ color: "var(--color-ivory)" }}>
              Envie uma mensagem agora e receba as informações da próxima
              Cavalgada Amigos do Rancho Canastra.
            </p>
            <div className="cav-final-actions">
              <a className="btn btn-light" href="#participar">
                Consultar a próxima cavalgada
              </a>
              <a
                className="btn btn-secondary"
                style={{ color: "var(--color-ivory)" }}
                href={site.instagramCavalgada}
                target="_blank"
                rel="noopener noreferrer"
              >
                Acompanhar no Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
