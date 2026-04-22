// Schritt 3:
// In dieser Komponente wählt der Nutzer eine Uhrzeit aus.

import "../styles/time.css";
export default function Step3Time({ time, setTime, setStep }) {
  // Beispielhafte freie Zeitslots
  // Später könnten diese dynamisch aus einer Datenbank kommen.
  const times = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
  ];

  return (
    <>
      {/* Überschrift */}
      <h1 className="title">Uhrzeit wählen</h1>

      {/* 
        Grid mit allen verfügbaren Zeiten
        Jede Zeit wird als Button dargestellt.
      */}
      <div className="time-grid">
        {times.map((t) => (
          <button
            key={t}
            // Beim Klick wird die gewählte Uhrzeit gespeichert
            onClick={() => setTime(t)}
            // Falls diese Uhrzeit aktuell ausgewählt ist,
            // bekommt der Button die CSS-Klasse "active-time"
            className={time === t ? "active-time" : ""}
          >
            {t}
          </button>
        ))}
      </div>

      {/* 
        Weiter-Button
        Erst wenn eine Uhrzeit ausgewählt wurde, ist der Button aktiv.
        Danach geht es zu Schritt 4 = Warenkorb / Übersicht
      */}
      <button
        className="button"
        disabled={!time}
        onClick={() => setStep(4)}
      >
        Weiter zum Warenkorb
      </button>
      <button className="back-button" onClick={() => setStep(2)}>← Zurück</button>
    </>
  );
}