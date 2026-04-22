// Schritt 4:
// In dieser Komponente sieht der Nutzer eine Übersicht
// über den gewählten Service, das Datum und die Uhrzeit.
import "../styles/cart.css";
export default function Step4Cart({ service, time, date, setStep }) {
  return (
    <>
      {/* Überschrift */}
      <h1 className="title">Warenkorb</h1>

      {/* Hauptbox für die Zusammenfassung */}
      <div className="cart-box">
        {/* Ausgewählter Service */}
        <div className="cart-item">
          <span>{service?.name}</span>
          <span>{service?.price} €</span>
        </div>

        {/* Trennlinie für bessere Übersicht */}
        <div className="divider" />

        {/* Preis */}
        <div className="cart-row">
          <span>Preis</span>
          <span>ca. {service?.price || 0} €</span>
        </div>

        {/* Dauer */}
        <div className="cart-row">
          <span>Dauer</span>
          <span>{service?.duration || 0} min</span>
        </div>

        {/* Datum */}
        <div className="cart-row">
          <span>Datum</span>
          <span>{date ? date.toLocaleDateString() : "-"}</span>
        </div>

        {/* Uhrzeit */}
        <div className="cart-row">
          <span>Uhrzeit</span>
          <span>{time || "-"}</span>
        </div>

        {/* 
          Button zur finalen Bestätigung
          Danach geht es zu Schritt 5 = Bestätigungsseite
        */}
        <button
          className="primary-button"
          onClick={() => setStep(5)}
        >
          Termin buchen
        </button>

        {/* Hinweis */}
        <p className="cart-note">
          *Preis kann je nach Aufwand variieren.
        </p>
        {/* Zurück zu Step 3 */}
          <button className="back-button"onClick={() => setStep(3)}>← Zurück</button>
      </div>
    </>
  );
}