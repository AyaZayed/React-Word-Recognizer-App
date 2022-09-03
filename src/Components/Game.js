import { useState } from "react";
import Rank from "./Rank";
import Practice from "./Practice";
import Navbar from "./Navbar";

function Game() {
  const [wordIndex, setWordIndex] = useState(0);
  const [rank, setRank] = useState(0);
  const [score, setScore] = useState(0);

  const data = {
    wordList: [
      {
        id: 1,
        word: "slowly",
        pos: "adverb",
      },
      {
        id: 2,
        word: "ride",
        pos: "verb",
      },
      {
        id: 3,
        word: "bus",
        pos: "noun",
      },
      {
        id: 4,
        word: "commute",
        pos: "verb",
      },
      {
        id: 5,
        word: "emissions",
        pos: "noun",
      },
      {
        id: 6,
        word: "walk",
        pos: "verb",
      },
      {
        id: 7,
        word: "fast",
        pos: "adjective",
      },
      {
        id: 8,
        word: "car",
        pos: "noun",
      },
      {
        id: 9,
        word: "crowded",
        pos: "adjective",
      },
      {
        id: 10,
        word: "arrival",
        pos: "noun",
      },
      {
        id: 11,
        word: "emit",
        pos: "verb",
      },
      {
        id: 12,
        word: "independent",
        pos: "adjective",
      },
      {
        id: 13,
        word: "convenient",
        pos: "adjective",
      },
      {
        id: 14,
        word: "lane",
        pos: "noun",
      },
      {
        id: 15,
        word: "heavily",
        pos: "adverb",
      },
    ],
    scoresList: [
      20, 90, 100, 50, 10, 50, 60, 0, 60, 10, 90, 30, 100, 30, 20, 90, 40, 20,
      10, 60, 50, 100, 50, 80, 50, 80, 60, 80, 10, 40,
    ],
  };

  function handleAnswer(e) {
    setWordIndex(wordIndex + 1);
    if (e.target.value === data.wordList[wordIndex].pos) {
      setScore(score + 10);
    }
    calculateRank();
  }

  function calculateRank() {
    const total = data.scoresList.length;
    let lower = 0;
    for (let i = 0; i < data.scoresList.length; i++) {
      if (data.scoresList[i] < score) {
        lower++;
        setRank(((lower / total) * 100).toFixed(2));
      }
    }
  }

  return (
    <div>
      <Navbar />
      {wordIndex === data.wordList.length ? (
        <Rank rank={rank} />
      ) : (
        <Practice
          wordIndex={wordIndex}
          data={data}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default Game;
