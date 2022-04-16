// Solution 1
function getScore(firstIndex, secondIndex, firstNum, secondNum) {
  return (secondIndex - firstIndex - 1) * Math.min(firstNum, secondNum);
}

function solution(n, players) {
  let maxScore = 0;
  let leftPoint = 0;
  let rightPoint = n - 1;

  while (leftPoint + 1 < rightPoint) {
    const score = getScore(
      leftPoint,
      rightPoint,
      players[leftPoint],
      players[rightPoint]
    );

    maxScore = Math.max(maxScore, score);

    if (players[leftPoint] < players[rightPoint]) {
      leftPoint += 1;
    } else {
      rightPoint -= 1;
    }
  }

  return maxScore;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const players = input[1].split(' ').map((value) => Number(value));

console.log(solution(n, players));
