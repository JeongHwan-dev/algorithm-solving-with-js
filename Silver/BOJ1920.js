// Solution 1
function solution(nArray, mArray) {
  const nMap = new Map();
  const results = [];

  for (const num of nArray) {
    if (!nMap.has(num)) {
      nMap.set(num, 1);
    }
  }

  for (const num of mArray) {
    nMap.has(num) ? results.push(1) : results.push(0);
  }

  return results.join('\n');
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const nArray = input[1].split(' ').map((value) => parseInt(value));
const m = parseInt(input[2]);
const mArray = input[3].split(' ').map((value) => parseInt(value));

console.log(solution(nArray, mArray));
