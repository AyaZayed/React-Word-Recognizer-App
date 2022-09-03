import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-page">
        <h1>We help you learn!</h1>
        <Link to="/game" exact="true">
          <button className="start-button">Start</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
