// Solution 1
function isConstructor(n, num) {
  const sum = num
    .toString()
    .split('')
    .reduce((acc, cur) => acc + parseInt(cur), 0);

  return n === num + sum ? true : false;
}

function solution(n) {
  for (let i = 1; i < n; i++) {
    if (isConstructor(n, i)) {
      return i;
    }
  }

  return 0;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input);

console.log(solution(n));
