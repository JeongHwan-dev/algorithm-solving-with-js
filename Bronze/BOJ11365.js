// Solution 1
function solution(arr) {
  const decodedCodes = [];

  for (const code of arr) {
    if (code === 'END') {
      break;
    }

    const decodedCode = code.split('').reverse().join('');

    decodedCodes.push(decodedCode);
  }

  return decodedCodes.join('\n');
}

const fs = require('fs');
const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(solution(arr));
