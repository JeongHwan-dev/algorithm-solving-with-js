const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input
  .shift()
  .split(' ')
  .map((value) => parseInt(value));
const aArray = input
  .shift()
  .split(' ')
  .map((value) => parseInt(value));
const bArray = input
  .shift()
  .split(' ')
  .map((value) => parseInt(value));

// Solution 1
console.log(solution(n, m, aArray, bArray));

function solution(n, m, aArray, bArray) {
  const combinedArray = [...aArray, ...bArray];

  combinedArray.sort((a, b) => a - b);

  return combinedArray.join(' ');
}
