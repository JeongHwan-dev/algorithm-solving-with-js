// Solution 1
function solution(n, cows) {
  const cowPositions = Array.from({ length: n + 1 }, () => -1);
  let count = 0;

  for (const [num, position] of cows) {
    if (cowPositions[num] === -1) {
      cowPositions[num] = position;
    } else if (cowPositions[num] !== position) {
      count += 1;
      cowPositions[num] = position;
    }
  }

  return count;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const cows = input
  .splice(1)
  .map((row) => row.split(' ').map((value) => Number(value)));

console.log(solution(n, cows));
