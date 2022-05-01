// Solution 1
function solution(n) {
  if ((n % 4 === 0 && n % 100 !== 0) || n % 400 === 0) {
    return 1;
  }

  return 0;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

console.log(solution(n));
