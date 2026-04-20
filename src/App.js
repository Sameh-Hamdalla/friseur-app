// Import von React und useState Hook für State-Management
import React, { useState } from "react";

// Import der einzelnen Steps (Komponenten)
import Step1Calendar from "./components/Step1Calendar";
import Step2Services from "./components/Step2Services";
import Step3Cart from "./components/Step3Cart";

// Globales CSS
import "./styles/global.css";
import Step3Time from "./components/Step3Cart";

function App() {
  // State für aktuellen Schritt (1 = Kalender, 2 = Services, 3 = Warenkorb)
  const [step, setStep] = useState(1);

  // State für ausgewähltes Datum
  const [date, setDate] = useState(null);

  // State für Kategorie (Standard: Männer)
  const [category, setCategory] = useState("men");

  // State für ausgewählten Service (anfangs keiner gewählt)
  const [service, setService] = useState(null);

  const [time, setTime] = useState(null);

  return (
    <div className="app">
      <div className="card">
        {/* STEP 1: Kalender */}
        {step === 1 && (
          <Step1Calendar
            date={date} // aktuelles Datum
            setDate={setDate} // Funktion zum Ändern des Datums
            setStep={setStep} // Funktion zum Wechseln des Steps
          />
        )}

        {/* STEP 2: Service-Auswahl */}
        {step === 2 && (
          <Step2Services
            category={category} // aktuelle Kategorie (men/women)
            setCategory={setCategory} // Kategorie ändern
            service={service} // aktuell gewählter Service
            setService={setService} // Service auswählen
            setStep={setStep} // Step wechseln
          />
        )}

        {/* STEP 3: Warenkorb / Übersicht */}
        {step === 3 && (
          <Step3Time
            time={time}
            setTime={setTime} // Uhrzeit ändern
            setStep={setStep} // Step wechseln
          />
        )}

        {step === 4 && <Step3Cart service={service} setStep={setStep} />}
      </div>
    </div>
  );
}

// Export der Hauptkomponente
export default App;
