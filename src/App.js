import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Game from "./Components/Game";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="game" element={<Game />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
