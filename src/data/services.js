// Import der CSS-Datei für das Styling der Services
import "../styles/services.css";

// Zentrale Definition aller Services
// Vorteil: Daten sind an einer Stelle gebündelt und können überall verwendet werden
const services = [
  {
    id: "m_classic", // eindeutige ID (wichtig für React-Keys und Auswahl)
    category: "men", // Kategorie → wird für Filter (Männer/Frauen) verwendet
    name: "Gentleman's Cut", // Name des Services (Anzeige im UI)
    duration: 30, // Dauer in Minuten
    price: 27, // Preis in Euro
  },
  {
    id: "m_beard",
    category: "men",
    name: "Haare & Bart",
    duration: 60,
    price: 45,
  },
  {
    id: "m_kid",
    category: "men",
    name: "Junior Style",
    duration: 25,
    price: 20,
  },
  {
    id: "w_classic",
    category: "women",
    name: "Classic",
    duration: 60,
    price: 45,
  },
  {
    id: "w_beauty",
    category: "women",
    name: "Haare & Styling",
    duration: 90,
    price: 65,
  },
  {
    id: "w_kid",
    category: "women",
    name: "Hübsches Mädle",
    duration: 30,
    price: 25,
  },
];

// Export, damit die Services in anderen Komponenten importiert werden können
export default services;
