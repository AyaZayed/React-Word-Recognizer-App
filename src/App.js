import { useState } from "react";
// import Rank from "./Components/Rank";
// import Practice from "./Components/Practice";

function App() {
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

  const options = ["verb", "noun", "adjective", "adverb"];

  function handleAnswer(e) {
    setWordIndex(wordIndex + 1);
    if (e.target.value === data.wordList[wordIndex].pos) {
      setScore(score + 1);
    }
    handleRank();
  }

  function handleRank() {
    setRank(score);
  }

  return (
    <div className="App">
      {wordIndex === data.wordList.length ? (
        // <Rank />
        <div className="rank-section">
          Your rank is {rank} out of {data.scoresList.length}
        </div>
      ) : (
        // <Practice setWord={setWordIndex} />
        <div className="practice-section">
          <div className="word-section">{data.wordList[wordIndex].word}</div>
          <div className="options-section">
            {options.map((option) => {
              return (
                <button
                  value={option}
                  onClick={handleAnswer}
                  key={option}
                  className="option-button"
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
