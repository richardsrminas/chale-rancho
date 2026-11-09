"use client";

import { useMemo, useState } from "react";
import {
  buildLodgingMessage,
  formatBR,
  getLodgingNumber,
  nightsBetween,
  whatsappLink,
} from "@/lib/whatsapp";

const ACCOMMODATIONS = [
  "Ainda não sei",
  "Chalé com ar-condicionado",
  "Chalé com cozinha completa",
  "Qualquer chalé disponível",
];

function todayISO(): string {
  if (typeof window === "undefined") return "";
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [accommodation, setAccommodation] = useState(ACCOMMODATIONS[0]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [today] = useState(() => todayISO());

  const number = useMemo(() => getLodgingNumber(), []);
  const nights = checkIn && checkOut ? nightsBetween(checkIn, checkOut) : 0;

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (!checkIn) e.checkIn = "Informe a data de check-in.";
    else if (today && checkIn < today) e.checkIn = "O check-in não pode ser no passado.";
    if (!checkOut) e.checkOut = "Informe a data de check-out.";
    else if (checkIn && checkOut <= checkIn)
      e.checkOut = "O check-out deve ser depois do check-in.";
    if (!adults || Number(adults) < 1) e.adults = "Informe ao menos 1 adulto.";
    if (Number(children) < 0) e.children = "Crianças não pode ser negativo.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    if (!number) return;
    const msg = buildLodgingMessage({
      checkIn: formatBR(checkIn),
      checkOut: formatBR(checkOut),
      nights,
      adults: Number(adults),
      children: Number(children),
      accommodation,
    });
    const link = whatsappLink(number, msg);
    if (link) window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="booking-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="checkin">Check-in</label>
        <input
          id="checkin"
          type="date"
          min={today || undefined}
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          aria-invalid={!!errors.checkIn}
        />
        {errors.checkIn && <span className="error">{errors.checkIn}</span>}
      </div>
      <div className="field">
        <label htmlFor="checkout">Check-out</label>
        <input
          id="checkout"
          type="date"
          min={checkIn || today || undefined}
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          aria-invalid={!!errors.checkOut}
        />
        {errors.checkOut && <span className="error">{errors.checkOut}</span>}
      </div>
      <div className="field">
        <label htmlFor="adults">Adultos</label>
        <input
          id="adults"
          type="number"
          min={1}
          value={adults}
          onChange={(e) => setAdults(e.target.value)}
          aria-invalid={!!errors.adults}
        />
        {errors.adults && <span className="error">{errors.adults}</span>}
      </div>
      <div className="field">
        <label htmlFor="children">Crianças</label>
        <input
          id="children"
          type="number"
          min={0}
          value={children}
          onChange={(e) => setChildren(e.target.value)}
          aria-invalid={!!errors.children}
        />
        {errors.children && <span className="error">{errors.children}</span>}
      </div>
      <div className="field">
        <label htmlFor="accommodation">Acomodação</label>
        <select
          id="accommodation"
          value={accommodation}
          onChange={(e) => setAccommodation(e.target.value)}
        >
          {ACCOMMODATIONS.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
      </div>
      <div className="field actions">
        <span className="booking-summary" aria-live="polite">
          {checkIn && checkOut && nights > 0
            ? `${nights} ${nights === 1 ? "noite" : "noites"}`
            : "Selecione as datas"}
        </span>
        {number ? (
          <button type="submit" className="btn btn-primary">
            Consultar pelo WhatsApp
          </button>
        ) : (
          <button type="button" className="btn btn-primary" disabled>
            Consultar pelo WhatsApp
          </button>
        )}
      </div>
      <p className="booking-disclaimer">
        Esta é uma consulta de disponibilidade por WhatsApp, não uma reserva
        confirmada. A pousada responderá com valores e disponibilidade.
      </p>
    </form>
  );
}
