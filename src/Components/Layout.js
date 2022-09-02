import { Link } from "react-router-dom";

function Layout() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <h1 className="logo">Word Recognizer</h1>
          </Link>
        </li>
        <li>
          <Link to="/game" exact="true">
            Start
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Layout;
