// Solution 1
function solution1(n) {
  let numberOfCases = 1;
  let leftPoint = 1;
  let rightPoint = 1;
  let sum = 0;

  while (leftPoint <= rightPoint && rightPoint <= n) {
    if (sum < n) {
      sum += rightPoint;
      rightPoint += 1;
    } else {
      if (sum === n) {
        numberOfCases += 1;
      }

      sum -= leftPoint;
      leftPoint += 1;
    }
  }

  return numberOfCases;
}

// Solution 2
function solution2(n) {
  let numberOfCases = 0;
  let leftPoint = 1;
  let rightPoint = 1;
  let sum = 0;

  sum += leftPoint;

  while (leftPoint <= rightPoint && rightPoint <= n) {
    if (sum < n) {
      rightPoint += 1;
      sum += rightPoint;
    } else {
      if (sum === n) {
        numberOfCases += 1;
      }

      sum -= leftPoint;
      leftPoint += 1;
    }
  }

  return numberOfCases;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

console.log(solution1(n));

console.log(solution2(n));
