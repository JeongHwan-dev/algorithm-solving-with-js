function solution(k, arr) {
  const positions = [];

  arr.forEach((value, index) => value === 1 && positions.push(index));

  if (positions.length < k) {
    return -1;
  }

  let minDollCount = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i <= positions.length - k; i++) {
    minDollCount = Math.min(
      minDollCount,
      positions[i + k - 1] - positions[i] + 1
    );
  }

  return minDollCount;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map((value) => parseInt(value));
const arr = input[1].split(' ').map((value) => parseInt(value));

console.log(solution(k, arr));
