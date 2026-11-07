# Chalés do Rancho — site oficial

Site institucional da Pousada Chalés do Rancho, na Serra da Canastra (Vargem Bonita — MG).
Next.js 16 (App Router) + React 19 + TypeScript.

## Rodar localmente

```bash
cd chale-rancho-app
npm install
cp .env.example .env.local   # preencher WhatsApp confirmado pela pousada
npm run dev
```

Abra http://localhost:3000. Para ver no celular (mesmo Wi-Fi):

```bash
npx next dev -H 0.0.0.0 -p 3000
# e acesse http://<ip-do-pc>:3000 (allowedDevOrigins já inclui o IP local)
```

## Variáveis de ambiente

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_WHATSAPP_LODGING` | Número WhatsApp (hospedagem), só dígitos, formato internacional |
| `NEXT_PUBLIC_WHATSAPP_EVENTS` | Número WhatsApp (cavalgadas/eventos) |
| `NEXT_PUBLIC_SITE_URL` | URL canônica do site em produção (ex.: https://chalesdorancho.com.br) |

## Publicar (deploy)

Este projeto precisa de servidor Node — **não funciona no GitHub Pages**.
Recomendado: [Vercel](https://vercel.com) (gratuito, integra com o GitHub):

1. Importe o repositório em vercel.com/new
2. Nas variáveis de ambiente do projeto, adicione as 3 variáveis acima
3. Deploy automático a cada push na branch principal

## Estrutura

- `app/` — rotas (`/`, `/acomodacoes`, `/cavalgadas`, `/experiencias`, `/localizacao`), `robots.ts`, `sitemap.ts`
- `components/` — `SiteHeader`, `SiteFooter`, `HeroSection`, `BookingForm`, `CavalgadaCTA`, `Reveal`
- `lib/content.ts` — conteúdo centralizado (endereço, links, textos, fotos)
- `lib/whatsapp.ts` — montagem das mensagens e link `wa.me`
- `public/images`, `public/videos`, `public/brand` — mídia real fornecida pela pousada
- `docs/` (na raiz do workspace) — brand identity, design system, arquitetura e pendências
