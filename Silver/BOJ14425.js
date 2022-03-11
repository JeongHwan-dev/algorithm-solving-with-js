// Solution 1
function solution(n, arr) {
  const map = new Map();

  for (let i = 0; i < n; i++) {
    map.set(arr[i], 1);
  }

  const count = arr.slice(n).filter((str) => map.has(str)).length;

  return count;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map((value) => parseInt(value));
const arr = input.slice(1);

console.log(solution(n, arr));
