// Schritt 4:
// In dieser Komponente sieht der Nutzer eine Übersicht
// über den gewählten Service, das Datum und die Uhrzeit.
// Zusätzlich gibt er hier seine Kontaktdaten ein.
import { useState, useMemo } from "react";
import "../styles/cart.css";

export default function Step4Cart({
  service,
  time,
  date,
  customer,
  setCustomer,
  setStep,
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Prüfen ob alle Felder ausgefüllt sind
  const isComplete = useMemo(() => {
    return (
      customer.firstName.trim() &&
      customer.lastName.trim() &&
      customer.email.trim() &&
      customer.phone.trim()
    );
  }, [customer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async () => {
    if (!isComplete) {
      setError("Bitte fülle alle Felder aus.");
      return;
    }

    setLoading(true);
    setError("");

    const booking = {
      service: service?.name,
      price: service?.price,
      duration: service?.duration,
      date: date ? date.toISOString() : null,
      time: time,
      customer: {
        firstName: customer.firstName.trim(),
        lastName: customer.lastName.trim(),
        email: customer.email.trim(),
        phone: customer.phone.trim(),
      },
    };

    try {
      await fetch(
        "https://directorial-frightenedly-kelvin.ngrok-free.dev/webhook/booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
          body: JSON.stringify(booking),
        }
      );

      setStep(5);
    } catch (err) {
      console.error("Fehler beim Senden:", err);
      setError("Buchung konnte nicht gesendet werden. Bitte versuche es erneut.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Überschrift */}
      <h1 className="title">Warenkorb</h1>

      {/* Hauptbox für die Zusammenfassung */}
      <div className="cart-box">
        {/* Ausgewählter Service */}
        <div className="cart-item">
          <span>{service?.name}</span>
          <span>{service?.price} €</span>
        </div>

        {/* Trennlinie für bessere Übersicht */}
        <div className="divider" />

        {/* Preis */}
        <div className="cart-row">
          <span>Preis</span>
          <span>ca. {service?.price || 0} €</span>
        </div>

        {/* Dauer */}
        <div className="cart-row">
          <span>Dauer</span>
          <span>{service?.duration || 0} min</span>
        </div>

        {/* Datum */}
        <div className="cart-row">
          <span>Datum</span>
          <span>{date ? date.toLocaleDateString("de-DE") : "-"}</span>
        </div>

        {/* Uhrzeit */}
        <div className="cart-row">
          <span>Uhrzeit</span>
          <span>{time || "-"}</span>
        </div>
      </div>

      {/* Kontaktdaten Formular */}
      <div className="cart-box form-box">
        <h2 className="form-title">Deine Kontaktdaten</h2>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="firstName">Vorname</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Max"
              value={customer.firstName}
              onChange={handleChange}
              autoComplete="given-name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Nachname</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Mustermann"
              value={customer.lastName}
              onChange={handleChange}
              autoComplete="family-name"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">E-Mail-Adresse</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="max@beispiel.de"
            value={customer.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Handynummer</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+49 151 12345678"
            value={customer.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>

        <p className="form-info">
          🔒 Diese Daten werden nicht dauerhaft gespeichert –
          die App dient nur zu Testzwecken.
        </p>

        {error && <p className="form-error">{error}</p>}
      </div>

      {/* Button zur finalen Bestätigung */}
      <button
        className="primary-button"
        onClick={handleSubmit}
        disabled={!isComplete || loading}
      >
        {loading ? "Wird gesendet…" : "Termin buchen"}
      </button>

      {/* Hinweis */}
      <p className="cart-note">*Preis kann je nach Aufwand variieren.</p>

      {/* Zurück zu Step 3 */}
      <button className="back-button" onClick={() => setStep(3)}>
        Zurück
      </button>
    </>
  );
}

