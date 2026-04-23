// Schritt 5:
// Finale Bestätigungsseite nach erfolgreicher Buchung
export default function Step5Confirmation({
  service,
  date,
  time,
  customer,
  setStep,
}) {
  return (
    <>
      {/* Überschrift */}
      <h1 className="title">Termin bestätigt ✅</h1>

      {/* Kurzer Bestätigungstext */}
      <p className="confirmation-text">
        Vielen Dank für deine Buchung,{" "}
        <strong>
          {customer?.firstName} {customer?.lastName}
        </strong>
        . Dein Termin wurde erfolgreich reserviert.
      </p>

      {/* 
        Zusammenfassung der Buchung
        Nutzt das gleiche Layout wie der Warenkorb (wiederverwendbar)
      */}
      <div className="cart-box">
        {/* Service */}
        <div className="cart-row">
          <span>Service</span>
          <span>{service?.name || "-"}</span>
        </div>

        {/* Preis */}
        <div className="cart-row">
          <span>Preis</span>
          <span>{service?.price ? `${service.price} €` : "-"}</span>
        </div>

        {/* Dauer */}
        <div className="cart-row">
          <span>Dauer</span>
          <span>{service?.duration ? `${service.duration} min` : "-"}</span>
        </div>

        {/* Datum */}
        <div className="cart-row">
          <span>Datum</span>
          <span>{date ? date.toLocaleDateString("de-DE") : "-"}</span>
        </div>

        {/* Uhrzeit */}
        <div className="cart-row">
          <span>Uhrzeit</span>
          <span>{time || "-"}</span>
        </div>

        <div className="divider" />

        {/* Kundendaten */}
        <div className="cart-row">
          <span>Name</span>
          <span>
            {customer?.firstName} {customer?.lastName}
          </span>
        </div>

        <div className="cart-row">
          <span>E-Mail</span>
          <span>{customer?.email || "-"}</span>
        </div>

        <div className="cart-row">
          <span>Telefon</span>
          <span>{customer?.phone || "-"}</span>
        </div>
      </div>

      {/* 
        Hauptaktion:
        Neue Buchung starten → setzt alles zurück
      */}
      <button
        className="primary-button"
        onClick={() => {
          setStep(1);
        }}
      >
        Neue Buchung starten
      </button>
    </>
  );
}

