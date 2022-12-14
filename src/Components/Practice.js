function Practice({ wordIndex, data, handleAnswer, isCorrect }) {
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
      {wordIndex !== 0 && (
        <div className="answer-section">
          {isCorrect ? (
            <div className="answer right">✓</div>
          ) : (
            <div className="answer wrong">✗</div>
          )}
        </div>
      )}
      <div className="progress-section">
        <label htmlFor="progress">
          {wordIndex === 1
            ? `${wordIndex} question answered`
            : `${wordIndex} questions answered`}
        </label>
        <progress
          value={wordIndex}
          max={data.wordList.length}
          id="progress"
        ></progress>
      </div>
    </div>
  );
}

export default Practice;
