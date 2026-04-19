// Import der CSS-Datei für das Styling des Warenkorbs
import "../styles/cart.css";

// React-Komponente für Schritt 3 (Warenkorb / Übersicht des gewählten Services)
function Step3Cart({ service, setStep }) {
  return (
    <>
      {/* Überschrift */}
      <h1 className="title">Warenkorb</h1>

      {/* Container für den Warenkorb */}
      <div className="cart">
        {/* Einzelner Warenkorb-Eintrag */}
        <div className="cart-item">
          {/* Name des ausgewählten Services */}
          <span>{service?.name}</span>

          {/* Preis des Services */}
          <span>{service?.price} €</span>
        </div>

        {/* Dauer des Services */}
        <p>Dauer: {service?.duration} min</p>
      </div>

      {/* Button zum nächsten Schritt (Termin buchen) */}
      <button
        className="button"
        onClick={() => setStep(4)} // wechselt zu Schritt 4
      >
        Termin buchen
      </button>
      
      <button className="back-button" onClick={() => setStep((prev) => prev - 1)}>
        ← Zurück
      </button>
    </>
  );
}

// Export der Komponente
export default Step3Cart;