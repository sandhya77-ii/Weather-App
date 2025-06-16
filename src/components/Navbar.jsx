import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <nav>
      <h1>Weather App</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
