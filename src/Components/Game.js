import { useState } from "react";
import Rank from "./Rank";
import Practice from "./Practice";
import Navbar from "./Navbar";
import data from "../TestData.json";

function Game() {
  const [wordIndex, setWordIndex] = useState(0);
  const [rank, setRank] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  function handleAnswer(e) {
    setWordIndex(wordIndex + 1);
    if (e.target.value === data.wordList[wordIndex].pos) {
      setScore(score + 10);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    calculateRank();
  }

  function calculateRank() {
    const total = data.scoresList.length;
    let lower = 0;
    for (let i = 0; i < data.scoresList.length; i++) {
      if (data.scoresList[i] < score) {
        lower++;
        setRank(((lower / total) * 100).toFixed(1));
      }
    }
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
