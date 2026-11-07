"use client";

import { useMemo, useState } from "react";
import { buildEventsMessage, getEventsNumber, whatsappLink } from "@/lib/whatsapp";

export default function CavalgadaCTA() {
  const [participants, setParticipants] = useState("2");
  const number = useMemo(() => getEventsNumber(), []);

  function onClick() {
    if (!number) return;
    const msg = buildEventsMessage(Number(participants) || undefined, undefined);
    const link = whatsappLink(number, msg);
    if (link) window.open(link, "_blank", "noopener,noreferrer");
  }

  if (!number) {
    return (
      <p className="error">
        WhatsApp de eventos ainda não configurado. Defina NEXT_PUBLIC_WHATSAPP_EVENTS no .env.local.
      </p>
    );
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "end" }}>
      <div className="field">
        <label htmlFor="participantes">Participantes</label>
        <input
          id="participantes"
          type="number"
          min={1}
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={onClick}>
        Quero participar da cavalgada
      </button>
    </div>
  );
}
