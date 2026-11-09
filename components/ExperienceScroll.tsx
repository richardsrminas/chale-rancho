"use client";

import Image from "next/image";
import { useEffect, useRef, useCallback, useMemo, useState } from "react";

type PlaneId = "piscina" | "rio" | "cafe" | "fogueira" | "animais" | "lagos";

interface ExperienceItem {
  id: PlaneId;
  title: string;
  text: string;
  img: string;
  alt: string;
}

// Sequência narrativa controlada pelo scroll.
// Cada cena ocupa uma faixa de progresso (0 a 1) dentro do container sticky.
const EXPERIENCES: ExperienceItem[] = [
  {
    id: "piscina",
    title: "Piscina",
    text: "Deck de madeira com vista para as colinas da Canastra.",
    img: "/images/experiences/piscina.jpg",
    alt: "Piscina ao ar livre com deck de madeira e vista para as colinas",
  },
  {
    id: "rio",
    title: "Rio São Francisco",
    text: "Acesso à prainha do rio, a poucos minutos da propriedade.",
    img: "/images/experiences/rio.jpg",
    alt: "Prainha do Rio São Francisco a poucos minutos da propriedade",
  },
  {
    id: "cafe",
    title: "Café da manhã colonial",
    text: "Quitandas caseiras e sabores da região, servidos com calma.",
    img: "/images/experiences/cafe.jpg",
    alt: "Mesa de café da manhã colonial com pães, frutas e quitandas caseiras",
  },
  {
    id: "fogueira",
    title: "Fogueira",
    text: "Cadeiras de madeira ao redor do fogo para noites tranquilas.",
    img: "/images/experiences/fogueira.jpg",
    alt: "Fogueira à noite com cadeiras de madeira ao redor",
  },
  {
    id: "animais",
    title: "Animais e vida rural",
    text: "Pavões, galinhas, gansos, pôneis, cavalos e vacas na propriedade.",
    img: "/images/experiences/animais.jpg",
    alt: "Animais da propriedade soltos na natureza",
  },
  {
    id: "lagos",
    title: "Lagos e natureza",
    text: "Dois lagos na propriedade cercados de silêncio e verde.",
    img: "/images/experiences/lagos.jpg",
    alt: "Lagoa da propriedade cercada de silêncio e verde",
  },
];

export default function ExperienceScroll({
  className = "experiences-3d",
}: { className?: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Cada cena ocupa uma fatia igual do progresso total do container.
  const slice = 1 / EXPERIENCES.length;

  const handleScroll = useCallback(() => {
    if (!containerRef.current || !stageRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const headerH = 76; // aproxima --header-h
    const viewportH = window.innerHeight;

    // O container começa a ser contado quando o topo dele entra na viewport
    // abaixo do header fixo, e termina quando a base sai da viewport.
    const start = rect.top - (viewportH - headerH);
    const end = rect.top - rect.height + viewportH;

    const total = end - start;
    const progress = total <= 0 ? 0 : Math.min(1, Math.max(0, -start / total));
    setProgress(progress);

    // Qual cena está ativa com base na fatia de progresso.
    const sliceLocal = 1 / EXPERIENCES.length;
    const index = Math.min(
      EXPERIENCES.length - 1,
      Math.floor(progress / sliceLocal)
    );
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // inicial
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Estilo 3D aplicado ao palco: rotação Y sutil baseada no progresso.
  // Cada cena ativa é traduzida no Z e escalada; as demais recuam.
  const sceneStyle = useMemo(() => {
    if (prefersReduced) return {};
    const rotateY = (progress - 0.5) * 12; // -6deg a +6deg
    const scale = 1 - Math.abs(progress - 0.5) * 0.15;
    return {
      transform: `rotateY(${rotateY}deg) scale(${scale})`,
    };
  }, [progress, prefersReduced]);

  const activeId = EXPERIENCES[activeIndex]?.id;

  return (
    <section className={className} ref={containerRef} aria-label="Experiências da propriedade">
      <div className="progress">
        <div className="progress-bar" style={{ width: `${progress * 100}%` }} />
      </div>

      <div className="section-head">
        <span className="eyebrow">Experiências</span>
        <h2 className="h2">A propriedade se revela aos poucos.</h2>
      </div>

      <div className="stage" ref={stageRef} style={sceneStyle}>
        {EXPERIENCES.map((exp) => {
          const isActive = activeId === exp.id;
          // Cada cena ativa ocupa um plano Z diferente para criar profundidade.
          const layer = isActive ? "mid" : "bg";
          return (
            <div
              key={exp.id}
              className={`plane ${layer} ${isActive ? "visible" : ""}`}
            >
              <Image
                src={exp.img}
                alt={exp.alt}
                width={920}
                height={720}
                loading={isActive ? "eager" : "lazy"}
                sizes="(max-width: 759px) 100vw, 920px"
              />
              <div className="caption">
                <span className="eyebrow">{exp.title}</span>
                <h3>{exp.title}</h3>
                <p>{exp.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <nav className="nav-dots" aria-label="Navegar pelas experiências">
        {EXPERIENCES.map((exp) => (
          <button
            key={exp.id}
            className={`dot ${activeId === exp.id ? "active" : ""}`}
            aria-label={`Ver ${exp.title}`}
            aria-pressed={activeId === exp.id}
            onClick={() => {
              setActiveIndex(EXPERIENCES.indexOf(exp));
            }}
          />
        ))}
      </nav>

      <div className="cta-row">
        <a href="/experiencias" className="btn btn-light">
          Explorar todas as experiências
        </a>
      </div>
    </section>
  );
}
