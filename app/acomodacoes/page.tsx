import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { accommodations } from "@/lib/content";

export const metadata: Metadata = {
  title: "Acomodações",
  description:
    "Chalés privativos do Chalés do Rancho na Serra da Canastra: ar-condicionado, TV, Wi-Fi, frigobar, varanda e opções com cozinha completa. Consulte disponibilidade pelo WhatsApp.",
};

export default function AcomodacoesPage() {
  return (
    <>
      <div className="container page-hero">
        <span className="eyebrow">Acomodações</span>
        <h1 className="h1">Chalés privativos no pé da serra.</h1>
        <p className="lead">
          Cada chalé tem banheiro privativo, varanda e vista para as montanhas ou jardins.
          Algumas unidades contam com cozinha completa.
        </p>
      </div>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="gallery-grid">
            {accommodations.map((a, i) => (
              <Reveal
                as="figure"
                key={a.img}
                className={i === 0 ? "wide" : ""}
              >
                <Image
                  src={a.img}
                  alt={a.alt}
                  width={i === 0 ? 1600 : 800}
                  height={i === 0 ? 1200 : 800}
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </Reveal>
            ))}
          </div>
          <Reveal className="section-head" style={{ marginTop: "3rem" }}>
            <h2 className="h3">Comodidades presentes nos chalés</h2>
            <p className="muted">
              Ar-condicionado, TV, Wi-Fi, frigobar, ventilador de teto, serviço de quarto e
              varanda. Café da manhã colonial com quitandas caseiras está incluído na estadia.
            </p>
            <div>
              <Link href="/#consulta" className="btn btn-primary">
                Consultar disponibilidade
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
