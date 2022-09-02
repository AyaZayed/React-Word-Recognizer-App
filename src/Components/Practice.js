function Practice({ wordIndex, data, handleAnswer }) {
  const options = ["verb", "noun", "adjective", "adverb"];

  return (
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
  );
}

export default Practice;
