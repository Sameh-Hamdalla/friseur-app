// Einfacher Footer unten
export default function Footer() {
  return (
    <footer className="footer">
      {/* Copyright */}
      <p>© {new Date().getFullYear()} SALON Booking</p>

      {/* Links (aktuell Buttons → keine ESLint Warnung) */}
      <div className="footer-links">
        <button className="footer-link">
          Impressum
        </button>

        <button className="footer-link">
          Datenschutz
        </button>
      </div>
    </footer>
  );
}