"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu ao mudar de rota: ajuste de estado derivado durante o render
  // (padrão recomendado pelo React, sem setState dentro de effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Páginas com hero em tela cheia e mídia escura: o header começa claro (on-dark)
  // e ganha fundo ao rolar. Nas páginas internas o fundo claro já tem contraste.
  const darkHero = pathname === "/" || pathname === "/cavalgadas";

  return (
    <header
      className={`site-header ${(scrolled || open) ? "scrolled" : ""} ${open ? "menu-open" : ""} ${
        darkHero && !scrolled && !open ? "on-dark" : ""
      }`}
    >
      <div className="container header-inner">
        <Link href="/" className="header-logo" aria-label="Chalés do Rancho — início">
          <Image src="/brand/logo.jpg" alt="" width={44} height={44} priority />
          <span>Chalés do Rancho</span>
        </Link>
        <nav className="main-nav" aria-label="Navegação principal">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/#consulta" className="btn btn-primary header-cta">
          Consultar hospedagem
        </Link>
        <button
          type="button"
          className={`menu-toggle ${open ? "open" : ""}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav
        id="mobile-nav"
        className={`mobile-nav ${open ? "open" : ""}`}
        aria-label="Navegação móvel"
      >
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href="/#consulta" className="btn btn-primary">
          Consultar hospedagem
        </Link>
      </nav>
    </header>
  );
}
