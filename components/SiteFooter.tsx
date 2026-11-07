import Image from "next/image";
import Link from "next/link";
import { site, nav } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/brand/logo.jpg" alt="Logo Chalés do Rancho" width={72} height={72} />
            <p>
              {site.name} — {site.tagline.toLowerCase()} em {site.region}. Um refúgio
              acolhedor para viver a Canastra sem pressa.
            </p>
          </div>
          <div>
            <h3>Navegação</h3>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contato e redes</h3>
            <ul>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram da pousada
                </a>
              </li>
              <li>
                <a href={site.instagramCavalgada} target="_blank" rel="noopener noreferrer">
                  Instagram das cavalgadas
                </a>
              </li>
              <li>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Abrir rota no Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-bottom">
          © 2026 {site.name}. {site.address.label} — {site.address.city}.
        </p>
      </div>
    </footer>
  );
}
