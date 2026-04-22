// Schritt 5:
// Finale Bestätigungsseite nach erfolgreicher Buchung
export default function Step5Confirmation({ service, date, time, setStep }) {
  return (
    <>
      {/* Überschrift */}
      <h1 className="title">Termin bestätigt ✅</h1>

      {/* Kurzer Bestätigungstext */}
      <p className="confirmation-text">
        Vielen Dank für deine Buchung. Dein Termin wurde erfolgreich reserviert.
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
          <span>
            {date ? date.toLocaleDateString("de-DE") : "-"}
          </span>
        </div>

        {/* Uhrzeit */}
        <div className="cart-row">
          <span>Uhrzeit</span>
          <span>{time || "-"}</span>
        </div>
      </div>

      {/* 
        Hauptaktion:
        Neue Buchung starten → setzt alles zurück
      */}
      <button
        className="primary-button"
        onClick={() => {
          // Optional: hier könntest du später auch alle States resetten
          setStep(1);
        }}
      >
        Neue Buchung starten
      </button>
    </>
  );
}