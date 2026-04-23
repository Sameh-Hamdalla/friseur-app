// Einfache Navigationsleiste oben
export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo / Name links */}
      <div className="nav-logo">
        SALON <span>Booking</span>
      </div>

      {/* Navigation rechts */}
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/kontakt">Kontakt</a>
      </div>
    </nav>
  );
}