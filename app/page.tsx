import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import BookingBar from "@/components/BookingBar";
import Reveal from "@/components/Reveal";
import ExperienceScroll from "@/components/ExperienceScroll";
import { home } from "@/lib/content";
export const metadata: Metadata = {
  title: {
    default: "Chalés do Rancho | Hospedagem e lazer na Serra da Canastra",
    template: "%s | Chalés do Rancho",
  },
  description:
    "Pousada na Serra da Canastra, em Vargem Bonita (MG). Chalés privativos, piscina, fogueira, café da manhã colonial e a Cavalgada Amigos do Rancho Canastra. Consulte disponibilidade pelo WhatsApp.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Chalés do Rancho",
    title: "Chalés do Rancho | Hospedagem e lazer na Serra da Canastra",
    description:
      "Refúgio na Serra da Canastra com chalés privativos, lazer e a Cavalgada Amigos do Rancho Canastra.",
    images: [{ url: "/brand/logo.jpg", width: 2048, height: 2048 }],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />

      <BookingBar />

      <section className="section section-enter" aria-label="A pousada">
        <div className="container split-section">
          <Reveal className="split-media">
            <Image
              src={home.intro.image}
              alt={home.intro.imageAlt}
              width={1600}
              height={1200}
              loading="lazy"
              sizes="(max-width: 759px) 100vw, 800px"
            />
          </Reveal>
          <Reveal className="split-copy">
            <span className="eyebrow">{home.intro.eyebrow}</span>
            <h2 className="h2">{home.intro.title}</h2>
            <p className="lead">{home.intro.text}</p>
            <Link href={home.intro.cta.href} className="link-editorial">
              {home.intro.cta.label}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section-forest section-enter" aria-label="Cavalgada destaque">
        <div className="container">
          <Reveal className="horse-campaign-head">
            <span className="eyebrow">{home.horsebackRiding.eyebrow}</span>
            <h2 className="horse-campaign-title">{home.horsebackRiding.title}</h2>
            <p className="horse-campaign-text">{home.horsebackRiding.text}</p>
            <Link href={home.horsebackRiding.cta.href} className="btn btn-light">
              {home.horsebackRiding.cta.label}
            </Link>
          </Reveal>
          <div className="horse-gallery">
            <Reveal as="figure" className="horse-gallery-main">
              <Image
                src={home.horsebackRiding.imageMain}
                alt={home.horsebackRiding.imageMainAlt}
                width={1600}
                height={1000}
                loading="eager"
                sizes="(max-width: 759px) 100vw, 1200px"
              />
            </Reveal>
            <Reveal as="figure" className="horse-gallery-side">
              <Image
                src={home.horsebackRiding.imageSide}
                alt={home.horsebackRiding.imageSideAlt}
                width={800}
                height={1000}
                loading="lazy"
                sizes="(max-width: 759px) 100vw, 400px"
              />
            </Reveal>
          </div>
          <Reveal style={{ marginTop: "2.5rem" }}>
            <a
              className="link-editorial link-light"
              href={home.horsebackRiding.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              {home.horsebackRiding.instagramLabel}
            </a>
          </Reveal>
        </div>
      </section>

      <ExperienceScroll />

      <section className="section section-enter" aria-label="Café da manhã">
        <div className="container">
          <Reveal className="section-head split">
            <div>
              <span className="eyebrow">{home.coffeeHome.eyebrow}</span>
              <h2 className="h2">{home.coffeeHome.title}</h2>
            </div>
            <p className="muted">{home.coffeeHome.text}</p>
          </Reveal>
          <div className="gallery-grid">
            {home.coffeeHome.items.map((c) => (
              <Reveal as="figure" key={c.img} className={c.wide ? "wide" : ""}>
                <Image
                  src={c.img}
                  alt={c.alt}
                  width={c.wide ? 1600 : 800}
                  height={c.wide ? 1200 : 800}
                  loading={c.wide ? "eager" : "lazy"}
                  sizes="(max-width: 759px) 100vw, 50vw"
                />
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <Link href={home.coffeeHome.cta.href} className="btn btn-light">
              {home.coffeeHome.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-enter" aria-label="Galeria da propriedade">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">{home.galleryHome.eyebrow}</span>
            <h2 className="h2">{home.galleryHome.title}</h2>
          </Reveal>
          <div className="gallery-grid">
            {home.galleryHome.items.map((g) => (
              <Reveal as="figure" key={g.img} className={g.wide ? "wide" : ""}>
                <Image
                  src={g.img}
                  alt={g.alt}
                  width={g.wide ? 1600 : 800}
                  height={g.wide ? 1200 : 800}
                  loading="lazy"
                  sizes="(max-width: 759px) 100vw, 50vw"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-forest section-enter cta-final" aria-label="Consulta final">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{home.ctaFinalHome.eyebrow}</span>
            <h2 className="h2">{home.ctaFinalHome.title}</h2>
            <p className="cta-lead">{home.ctaFinalHome.text}</p>
            <Link href={home.ctaFinalHome.cta.href} className="btn btn-light">
              {home.ctaFinalHome.cta.label}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
