import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Gourmet Haven</h2>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/areas">Seating Areas</Link>
        <Link to="/reserve">Reserve Table</Link>
        <Link to="/history">Reservations</Link>
      </div>
    </nav>
  );
}

export default Navbar;