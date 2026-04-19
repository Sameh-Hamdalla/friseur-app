// Import der Kalender-Komponente aus der Bibliothek react-calendar
import Calendar from "react-calendar";

// Import der Standard-CSS-Styles für den Kalender
import "react-calendar/dist/Calendar.css";

// Funktionale React-Komponente für Schritt 1 (Datum auswählen)
function Step1Calendar({ date, setDate, setStep }) {
  return (
    <>
      {/* Überschrift */}
      <h1 className="title">Termin wählen</h1>

      {/* Kalender-Komponente */}
      <Calendar
        className="calendar" // CSS-Klasse für Styling
        value={date} // aktuell ausgewähltes Datum
        onChange={setDate} // Funktion wird aufgerufen, wenn Nutzer Datum ändert
        tileDisabled={({ date }) =>
          // Deaktiviert bestimmte Tage im Kalender:
          // getDay(): 0 = Sonntag, 1 = Montag
          // → Sonntag und Montag sind nicht auswählbar
          date.getDay() === 0 || date.getDay() === 1
        }
      />

      {/* Anzeige des gewählten Datums */}
      <p>Gewähltes Datum: {" "}
        {date ? date.toLocaleDateString() : "Bitte Datum auswählen"}</p>

      {/* Button zum nächsten Schritt */}
      <button
        className="button"
        onClick={() => setStep(2)} // wechselt zu Schritt 2 (Service-Auswahl)
        disabled={!date} // Button ist deaktiviert, wenn kein Datum ausgewählt ist
      >
        Weiter zur Service-Auswahl
      </button>
      
    </>
  );
}

// Export der Komponente, damit sie in anderen Dateien verwendet werden kann
export default Step1Calendar;