const whatsappLodging = process.env.NEXT_PUBLIC_WHATSAPP_LODGING?.trim();
const whatsappEvents = process.env.NEXT_PUBLIC_WHATSAPP_EVENTS?.trim();

export function getLodgingNumber(): string | null {
  return whatsappLodging && /^\d{10,15}$/.test(whatsappLodging) ? whatsappLodging : null;
}

export function getEventsNumber(): string | null {
  const n = whatsappEvents && /^\d{10,15}$/.test(whatsappEvents) ? whatsappEvents : whatsappLodging;
  return n && /^\d{10,15}$/.test(n) ? n : null;
}

export type LodgingInquiry = {
  checkIn: string; // dd/mm/aaaa
  checkOut: string; // dd/mm/aaaa
  nights: number;
  adults: number;
  children: number;
  accommodation: string;
};

export function buildLodgingMessage(q: LodgingInquiry): string {
  return [
    "Olá! Gostaria de consultar disponibilidade no Chalés do Rancho.",
    "",
    `Check-in: ${q.checkIn}`,
    `Check-out: ${q.checkOut}`,
    `Quantidade de noites: ${q.nights}`,
    `Adultos: ${q.adults}`,
    `Crianças: ${q.children}`,
    `Acomodação de interesse: ${q.accommodation || "Ainda não sei"}`,
    "",
    "Poderiam me informar disponibilidade e valores? Obrigado(a)!",
  ].join("\n");
}

export function buildEventsMessage(participants?: number, dateInterest?: string): string {
  return [
    "Olá! Tenho interesse na Cavalgada Amigos do Rancho Canastra.",
    "",
    dateInterest ? `Evento/data de interesse: ${dateInterest}` : null,
    participants ? `Quantidade de participantes: ${participants}` : null,
    "Gostaria de receber informações sobre programação, inscrições, valores e orientações.",
  ]
    .filter(Boolean)
    .join("\n");
}

export function whatsappLink(number: string | null, message: string): string | null {
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function formatBR(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

export function nightsBetween(checkIn: string, checkOut: string): number {
  const a = new Date(`${checkIn}T12:00:00`);
  const b = new Date(`${checkOut}T12:00:00`);
  return Math.round((b.getTime() - a.getTime()) / 86400000);
}
