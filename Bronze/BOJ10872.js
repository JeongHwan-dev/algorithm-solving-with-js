// Solution 1
function factorialize(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

function solution(n) {
  const nFactorial = factorialize(n);

  return nFactorial;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input);

console.log(solution(n));
