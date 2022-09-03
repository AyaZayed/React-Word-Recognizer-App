import data from "./TestData.json";

export function getData() {
  let newWordsList = [];
  for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * data.wordList.length);
    if (
      (!newWordsList.includes(data.wordList.pos === "verb") &&
        data.wordList[random].pos === "verb") ||
      (!newWordsList.includes(data.wordList.pos === "noun") &&
        data.wordList[random].pos === "noun") ||
      (!newWordsList.includes(data.wordList.pos === "adverb") &&
        data.wordList[random].pos === "adverb") ||
      (!newWordsList.includes(data.wordList.pos === "adjective") &&
        data.wordList[random].pos === "adjective")
    ) {
      newWordsList.push(data.wordList[random]);
    }
  }
  const newData = { wordList: newWordsList, scoresList: data.scoresList };
  return newData;
}

export function calculateRank(score) {
  const total = data.scoresList.length;
  let lower = 0;
  for (let i = 0; i < data.scoresList.length; i++) {
    if (data.scoresList[i] < score) {
      lower++;
    }
  }
  const rank = ((lower / total) * 100).toFixed(2);
  return rank;
}
