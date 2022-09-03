import { useState } from "react";
import Rank from "./Rank";
import Practice from "./Practice";
import Navbar from "./Navbar";
import { getData, calculateRank } from "../server/App";

function Game() {
  const [wordIndex, setWordIndex] = useState(0);
  const [rank, setRank] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const data = getData();

  function handleAnswer(e) {
    setWordIndex(wordIndex + 1);
    if (e.target.value === data.wordList[wordIndex].pos) {
      setScore(score + 10);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setRank(calculateRank(score));
  }

  return (
    <div className="game-section">
      <Navbar />
      {wordIndex === data.wordList.length ? (
        <>
          <Rank rank={rank} />
          <button onClick={() => setWordIndex(0)} className="try-again-button">
            Try Again
          </button>
        </>
      ) : (
        <Practice
          wordIndex={wordIndex}
          data={data}
          handleAnswer={handleAnswer}
          isCorrect={isCorrect}
        />
      )}
    </div>
  );
}

export default Game;
