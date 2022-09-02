import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Game from "./Components/Game";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
