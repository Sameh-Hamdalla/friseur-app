// React importieren (wird für JSX und Komponenten benötigt)
import React from "react";

// ReactDOM importieren, um React mit dem Browser zu verbinden
import ReactDOM from "react-dom/client";

// Deine Hauptkomponente importieren
import App from "./App";
import "./styles/global.css";
// Das HTML-Element mit der ID "root" holen und einen React-Root erstellen
const root = ReactDOM.createRoot(document.getElementById("root"));

// Die App-Komponente im Browser anzeigen (rendern)
root.render(<App />);
