// Import von React und dem Hook useState
// useState wird verwendet, um Werte im State zu speichern,
// die sich während der Nutzung der App ändern.
import React, { useState } from "react";

// Import der einzelnen Schritt-Komponenten
import Step1Calendar from "./components/Step1Calendar";
import Step2Services from "./components/Step2Services";
import Step3Time from "./components/Step3Time";
import Step4Cart from "./components/Step4Cart";
import Step5Confirmation from "./components/Step5Confirmation";

// Import des globalen CSS
import "./styles/global.css";

// Hauptkomponente der App
function App() {
  // State für den aktuellen Schritt
  // 1 = Datum wählen
  // 2 = Service wählen
  // 3 = Uhrzeit wählen
  // 4 = Warenkorb / Übersicht
  // 5 = Bestätigung
  const [step, setStep] = useState(1);

  // State für das gewählte Datum
  // Standardmäßig wird das heutige Datum gesetzt
  const [date, setDate] = useState(new Date());

  // State für die Kategorie der Services
  // Standardwert ist "men"
  const [category, setCategory] = useState("men");

  // State für den aktuell ausgewählten Service
  // Anfangs ist noch kein Service gewählt
  const [service, setService] = useState(null);

  // State für die gewählte Uhrzeit
  // Anfangs ist noch keine Uhrzeit gewählt
  const [time, setTime] = useState(null);

  return (
    <div className="app">
      {/* 
        Zentrale Karte / Box der App
        Hier wird je nach aktuellem Step eine andere Komponente angezeigt
      */}
      <div className="card">
        {/* Schritt 1: Kalender */}
        {step === 1 && (
          <Step1Calendar date={date} setDate={setDate} setStep={setStep} />
        )}

        {/* Schritt 2: Service-Auswahl */}
        {step === 2 && (
          <Step2Services
            category={category}
            setCategory={setCategory}
            service={service}
            setService={setService}
            setStep={setStep}
          />
        )}

        {/* Schritt 3: Uhrzeit wählen */}
        {step === 3 && (
          <Step3Time time={time} setTime={setTime} setStep={setStep} />
        )}

        {/* Schritt 4: Warenkorb / Übersicht */}
        {step === 4 && (
          <Step4Cart
            service={service}
            time={time}
            date={date}
            setStep={setStep}
          />
        )}

        {/* Schritt 5: Bestätigung */}
        {step === 5 && (
          <Step5Confirmation
            service={service}
            date={date}
            time={time}
            setStep={setStep}
          />
        )}
      </div>
    </div>
  );
}

// Export der Hauptkomponente,
// damit sie in index.js oder main.jsx gerendert werden kann
export default App;
