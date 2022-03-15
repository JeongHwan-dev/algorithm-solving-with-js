// Solution 1
function solution(n) {
  const winner = n % 2 === 0 ? 'CY' : 'SK';

  return winner;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input);

console.log(solution(n));
