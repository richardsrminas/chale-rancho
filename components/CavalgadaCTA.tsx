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
      <p className="pending-note" role="status">
        As inscrições da próxima cavalgada são abertas diretamente com a
        organização.{" "}
        <a
          href="https://www.instagram.com/cavalgadamigosdoranchocanastra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acompanhe a cavalgada no Instagram
        </a>{" "}
        para saber das próximas datas.
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
