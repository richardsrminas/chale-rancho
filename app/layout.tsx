import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chalesdorancho.com.br"),
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
    images: [{ url: "/brand/logo.jpg", width: 2048, height: 2048, alt: "Chalés do Rancho" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
