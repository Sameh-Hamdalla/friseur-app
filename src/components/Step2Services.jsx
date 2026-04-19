// Import der Service-Daten (z. B. Haarschnitt, Styling etc.)
import services from "../data/services";

// React-Komponente für Schritt 2 (Service auswählen)
function Step2Services({
  category,
  setCategory,
  service,
  setService,
  setStep,
}) {
  return (
    <>
      {/* Überschrift */}
      <h1 className="title">Service wählen</h1>

      {/* Tabs zur Auswahl der Kategorie (Männer / Frauen) */}
      <div className="tabs">
        <button
          className={category === "men" ? "active-tab" : ""} // aktiver Tab wird hervorgehoben
          onClick={() => setCategory("men")} // setzt Kategorie auf "men"
        >
          Männer
        </button>

        <button
          className={category === "women" ? "active-tab" : ""} // aktiver Tab wird hervorgehoben
          onClick={() => setCategory("women")} // setzt Kategorie auf "women"
        >
          Frauen
        </button>
      </div>

      {/* Anzeige der Services basierend auf gewählter Kategorie */}
      <div className="services">
        {services
          .filter((s) => s.category === category) 
          // Filtert nur Services, die zur gewählten Kategorie passen

          .map((s) => (
            <div
              key={s.id} // eindeutiger Key für React
              className={`service-card ${
                service?.id === s.id ? "active" : ""
              }`}
              // Wenn dieser Service ausgewählt ist → "active" Klasse hinzufügen

              onClick={() => setService(s)} 
              // Beim Klick wird dieser Service ausgewählt
            >
              {/* Kopfbereich der Service-Karte */}
              <div className="service-header">
                <strong>{s.name}</strong> {/* Name des Services */}
                <span>{s.price} €</span> {/* Preis */}
              </div>

              {/* Dauer des Services */}
              <p>{s.duration} min</p>
            </div>
          ))}
      </div>

      {/* Button zum nächsten Schritt */}
      <button
        className="button"
        onClick={() => setStep(3)} // wechselt zu Schritt 3
        disabled={!service} // deaktiviert, solange kein Service ausgewählt ist
      >
        Weiter
      </button>
      <button className="back-button" onClick={() => setStep(1)}>
        ← Zurück
      </button>
    </>
  );
}

// Export der Komponente
export default Step2Services;