// Solution 1
function getFibonacci(n) {
  const fibonacci = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
  }

  return fibonacci;
}

function solution(n) {
  const fibonacci = getFibonacci(n);

  return fibonacci[n];
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input);

console.log(solution(n));
