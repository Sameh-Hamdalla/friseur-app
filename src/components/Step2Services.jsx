// Import der zentralen Service-Daten
import services from "../data/services";
import "../styles/services.css";
// Schritt 2:
// In dieser Komponente wählt der Nutzer zuerst eine Kategorie
// (Männer / Frauen) und danach einen konkreten Service aus.
export default function Step2Services({
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

      {/* 
        Tabs zur Kategorie-Auswahl
        Mit diesen Buttons wird festgelegt, welche Services angezeigt werden
      */}
      <div className="tabs">
        <button
          // Falls die aktuelle Kategorie "men" ist,
          // bekommt der Button die CSS-Klasse "active-tab"
          className={category === "men" ? "active-tab" : ""}
          onClick={() => setCategory("men")}
        >
          Männer
        </button>

        <button
          className={category === "women" ? "active-tab" : ""}
          onClick={() => setCategory("women")}
        >
          Frauen
        </button>
      </div>

      {/* 
        Liste aller Services
        Es werden nur die Services angezeigt,
        deren Kategorie zur aktuellen Auswahl passt.
      */}
      <div className="services">
        {services
          .filter((s) => s.category === category)
          .map((s) => (
            <div
              key={s.id}
              // Falls dieser Service aktuell ausgewählt ist,
              // wird zusätzlich die Klasse "active" gesetzt
              className={`service-card ${
                service?.id === s.id ? "active" : ""
              }`}
              // Beim Klick wird der Service im State gespeichert
              onClick={() => setService(s)}
            >
              {/* Oberer Bereich der Service-Karte */}
              <div className="service-header">
                <strong>{s.name}</strong>
                <span>{s.price} €</span>
              </div>

              {/* Dauer des Services */}
              <p>{s.duration} min</p>
            </div>
          ))}
      </div>

      {/* 
        Weiter-Button
        Erst wenn ein Service ausgewählt wurde, darf weitergeklickt werden.
        Danach geht es zu Schritt 3 = Uhrzeit wählen.
      */}
      <button
        className="button"
        onClick={() => setStep(3)}
        disabled={!service}
      >
        Weiter zur Uhrzeit
      </button>
      <button className="back-button" onClick={() => setStep(1)}>← Zurück</button>
    </>
  );
}