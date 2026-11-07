export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  const routes = ["", "/acomodacoes", "/cavalgadas", "/experiencias", "/localizacao"];
  return routes.map((r) => ({
    url: base ? `${base}${r}` : r,
    lastModified: new Date("2026-11-07"),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
