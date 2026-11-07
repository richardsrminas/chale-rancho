import Image from "next/image";
import Link from "next/link";
import { hero } from "@/lib/content";

export default function HeroSection() {
  return (
    <section className="hero" aria-label="Apresentação">
      <div className="hero-media">
        {/* Mobile: vídeo vertical 9:16 */}
        <video
          className="mobile-only"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/paisagem/vista06.jpeg"
          aria-hidden="true"
        >
          <source src={hero.videoMobile} type="video/mp4" />
        </video>
        {/* Desktop: foto horizontal real, sem esticar o vídeo */}
        <Image
          className="desktop-only"
          src={hero.imageDesktop}
          alt="Lagoa da propriedade ao pôr do sol, com a casa iluminada"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="container hero-content">
        <span className="eyebrow">{hero.eyebrow}</span>
        <h1 className="hero-title">{hero.title}</h1>
        <p className="hero-sub">{hero.sub}</p>
        <div className="hero-actions">
          <Link href={hero.primaryCta.href} className="btn btn-light">
            {hero.primaryCta.label}
          </Link>
          <Link href={hero.secondaryCta.href} className="btn btn-secondary">
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
