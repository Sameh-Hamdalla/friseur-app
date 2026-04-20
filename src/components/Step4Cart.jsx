// React-Komponente für Schritt 3 (Warenkorb / Übersicht)
export default function Step3Cart({ service, setStep }) {
  return (
    <>
      {/* Überschrift */}
      <h1 className="title">Warenkorb</h1>

      {/* Container für den Warenkorb */}
      <div className="cart-box">
        {/* Service (Name + Preis) */}
        <div className="cart-item">
          <span>{service?.name}</span> {/* Name des gewählten Services */}
          <span>{service?.price} €</span> {/* Preis */}
        </div>

        {/* Trennlinie für visuelle Struktur */}
        <div className="divider" />

        {/* Preis-Information */}
        <div className="cart-row">
          <span>Preis</span>
          <span>ca. {service?.price || 0} €</span>
          {/* Fallback auf 0€, falls kein Service gewählt */}
        </div>

        {/* Dauer des Services */}
        <div className="cart-row">
          <span>Dauer</span>
          <span>{service?.duration || 0} min</span>
        </div>

        {/* Hinweis auf Termin (kommt im nächsten Schritt) */}
        <div className="cart-row">
          <span>Termin</span>
          <span>im nächsten Schritt</span>
        </div>

        {/* Button zum finalen Buchungsschritt */}
        <button
          className="primary-button"
          onClick={() => setStep(4)} // wechselt zu Schritt 4 (Termin buchen)
        >
          Termin buchen
        </button>

        {/* Hinweistext */}
        <p className="cart-note">
          *Preis kann je nach Aufwand variieren.
        </p>
      </div>
    </>
  );
}