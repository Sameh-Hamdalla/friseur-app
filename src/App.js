import React, { useState } from "react"; // React + Hook zum Speichern von Daten
import Calendar from "react-calendar"; // Kalender-Komponente
import "react-calendar/dist/Calendar.css"; // Standard-Styling vom Kalender

/**
 * Hauptkomponente der Friseur-App.
 * Enthält Kalender, Eingabefelder und Terminbuchung.
 */
function App() {
  // useState erzeugt:
  // 1. den aktuellen Wert (date)
  // 2. eine Funktion zum Ändern (setDate)
  const [date, setDate] = useState(new Date());
  // date = aktuelles Datum
  // setDate(...) = Funktion um das Datum zu ändern

  // State für den Namen
  const [name, setName] = useState("");
  // name = aktueller Text im Input
  // setName(...) = speichert neuen Namen

  // State für Telefonnummer
  const [phone, setPhone] = useState("");
  // phone = aktueller Wert
  // setPhone(...) = aktualisiert ihn

  // State für Wunsch (Textarea)
  const [wish, setWish] = useState("");
  // wish = aktueller Text
  // setWish(...) = speichert neuen Text

  const [time, setTime] = useState("10:00");
  // time = aktueller Wert
  // setTime(...) = aktualisiert ihn

  /**
   * Generiert eine Liste von Uhrzeiten (Timeslots) für die Terminbuchung.
   *
   * Ablauf:
   * - Startet bei 10:00 Uhr
   * - Endet bei 17:30 Uhr (letzte generierte Zeit ist 17:30)
   * - Erstellt alle 30 Minuten einen neuen Timeslot
   *
   * Beispiel-Ausgabe:
   * ["10:00", "10:30", "11:00", ..., "17:30"]
   *
   * Rückgabewert:
   * - Array mit Strings im Format "HH:MM"
   */
  const generateTimeSlots = () => {
    // Array, in dem alle Uhrzeiten gespeichert werden
    const slots = [];

    /**
     * Äußere Schleife:
     * - läuft durch die Stunden (10 bis 17)
     * - hour = aktuelle Stunde
     */
    for (let hour = 10; hour < 18; hour++) {
      /**
       * Innere Schleife:
       * - erzeugt Minuten in 30er-Schritten (0 und 30)
       * - min = aktuelle Minute
       */
      for (let min = 0; min < 60; min += 30) {
        /**
         * Formatierung der Uhrzeit:
         * - padStart(2, "0") sorgt dafür, dass immer 2 Stellen angezeigt werden
         *   z. B. "9" → "09"
         */
        const time =
          `${hour.toString().padStart(2, "0")}:` +
          `${min.toString().padStart(2, "0")}`;

        // Fügt die formatierte Uhrzeit dem Array hinzu
        slots.push(time);
      }
    }

    // Gibt alle generierten Timeslots zurück
    return slots;
  };

  /**
   * Wird ausgelöst beim Klick auf "Termin buchen"
   */
  const handleBooking = () => {
    // !name bedeutet: Name ist leer
    // || bedeutet: ODER
    // → wenn Name ODER Telefon fehlt → Fehler
    if (!name || !phone) {
      alert("Bitte Name und Telefonnummer eingeben");
      return;
    }

    // zeigt aktuell nur eine Bestätigung
    alert(`Termin gebucht am ${date.toLocaleDateString()} für ${name}`);
  };

  return (
    <div>
      <h1>Friseur Termin buchen</h1>

      {/* 
        Kalender:
        - value={date} → zeigt aktuelles Datum
        - onChange={setDate} → wird ausgelöst wenn User ein Datum klickt
        → setDate(neuesDatum) speichert es im State
      */}
      <Calendar
        onChange={setDate}
        value={date}
        // tileDisabled:
        // Funktion, die bestimmt, welche Tage im Kalender deaktiviert sind
        // Hier: Alle Sonntage (getDay() === 0) werden deaktiviert
        tileDisabled={({ date }) => date.getDay() === 0 || date.getDay() === 1}
      />

      {/* zeigt das aktuell gespeicherte Datum */}
      <p>Gewähltes Datum: {date.toLocaleDateString()}</p>

      <select value={time} onChange={(e) => setTime(e.target.value)}>
        <option value="">Uhrzeit wählen</option>

        {generateTimeSlots().map((slot) => (
          <option key={slot} value={slot}>
            {slot}
          </option>
        ))}
      </select>

      {/* Eingabe Name */}
      <input
        type="text"
        placeholder="Dein Name"
        // value={name}:
        // Das Input-Feld zeigt immer den aktuellen State-Wert
        value={name}
        // onChange:
        // wird ausgelöst, wenn User tippt
        onChange={(e) => {
          // e = Event-Objekt
          // e.target.value = aktueller Text im Feld
          setName(e.target.value); // speichert den neuen Wert
        }}
      />

      {/* Eingabe Telefonnummer */}
      <input
        type="tel"
        placeholder="Telefonnummer"
        value={phone}
        onChange={(e) => {
          // speichert jede Eingabe im State
          setPhone(e.target.value);
        }}
      />

      {/* Eingabe Wunsch */}
      <textarea
        placeholder="Dein Wunsch (z.B. Haarschnitt, Farbe)"
        // zeigt aktuellen gespeicherten Text
        value={wish}
        // reagiert auf jede Änderung (Tippen)
        onChange={(e) => {
          // speichert neuen Text in wish
          setWish(e.target.value);
        }}
      />

      {/* Button zur Terminbuchung */}
      <button
        onClick={handleBooking}
        // onClick:
        // wird ausgelöst, wenn User klickt
        // → führt handleBooking() aus
      >
        Termin buchen
      </button>
    </div>
  );
}

export default App;
