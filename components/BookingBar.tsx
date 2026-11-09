"use client";

import BookingForm from "./BookingForm";
import { booking } from "@/lib/content";

export default function BookingBar() {
  return (
    <section id="consulta" aria-label="Consulta de hospedagem">
      <div className="booking">
        <div className="booking-inner">
          <div className="booking-head">
            <span className="eyebrow">Consulta de hospedagem</span>
            <h2 className="h2">Planeje sua estadia na Canastra.</h2>
            <p>
              Informe entrada, saída, número de hóspedes e a acomodação de
              interesse. Respondemos pelo WhatsApp com disponibilidade e
              valores.
            </p>
          </div>
          <BookingForm />
          <p className="booking-disclaimer">{booking.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
