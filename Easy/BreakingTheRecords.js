// Solution 1
function breakingRecords(scores) {
  const breakingRecordsCount = [0, 0];
  let heighestScore = scores[0];
  let lowestScore = scores[0];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > heighestScore) {
      breakingRecordsCount[0]++;
      heighestScore = scores[i];
    } else if (scores[i] < lowestScore) {
      breakingRecordsCount[1]++;
      lowestScore = scores[i];
    }
  }

  return breakingRecordsCount;
}
