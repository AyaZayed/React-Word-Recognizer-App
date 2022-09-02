import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <h1>We help you learn!</h1>
      <Link to="/game" exact="true">
        <button className="start-button">Start</button>
      </Link>
    </div>
  );
}

export default Home;
