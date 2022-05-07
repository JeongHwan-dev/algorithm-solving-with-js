// Solution 1
function solution(n, b) {
  const char = n.split('').reverse();
  let sum = 0;

  for (var i = 0; i < char.length; i++) {
    if (char[i] >= 'A' && char[i] <= 'Z') {
      char[i] = char[i].charCodeAt(0) - 55;
      sum += char[i] * Math.pow(b, i);
    } else {
      char[i] = Number(char[i]);
      sum += char[i] * Math.pow(b, i);
    }
  }
  return sum;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const n = input[0];
const b = Number(input[1]);

console.log(solution(n, b));
