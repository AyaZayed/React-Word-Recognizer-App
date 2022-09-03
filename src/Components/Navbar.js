import { Link } from "react-router-dom";
import Logo from "../images/logo with background.png";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            <img src={Logo} alt="logo" className="logo" />
          </Link>
        </li>
        <li>
          <Link to="/game" exact="true">
            <button className="start-button">Start</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
