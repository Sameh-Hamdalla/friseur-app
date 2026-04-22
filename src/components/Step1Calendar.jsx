// Import der Kalender-Komponente aus der Bibliothek "react-calendar"
import Calendar from "react-calendar";

// Import der Standard-Styles von react-calendar
import "react-calendar/dist/Calendar.css";

// Schritt 1:
// In dieser Komponente wählt der Nutzer ein Datum aus.
export default function Step1Calendar({ date, setDate, setStep }) {
  return (
    <>
      {/* Überschrift des ersten Schritts */}
      <h1 className="title">Termin wählen</h1>

      {/* 
        Kalender-Komponente
        - value: aktuell ausgewähltes Datum
        - onChange: wird aufgerufen, sobald der Nutzer ein neues Datum anklickt
        - tileDisabled: deaktiviert bestimmte Tage
      */}
      <Calendar
        className="calendar"
        value={date}
        onChange={setDate}
        tileDisabled={({ date }) =>
          // 0 = Sonntag, 1 = Montag
          // Diese beiden Wochentage sind hier deaktiviert
          date.getDay() === 0 || date.getDay() === 1
        }
      />

      {/* Anzeige des aktuell gewählten Datums */}
      <p>
        Gewähltes Datum:{" "}
        {date ? date.toLocaleDateString() : "Kein Datum ausgewählt"}
      </p>

      {/* 
        Button für den nächsten Schritt
        Beim Klick wird step auf 2 gesetzt → Service-Auswahl
      */}
      <button className="button" onClick={() => setStep(2)}>
        Weiter zur Service-Auswahl
      </button>
    </>
  );
}