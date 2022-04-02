// Solution 1
function solution(str) {
  const regExp = /(<.+?>|\s)/g;
  const arr = str.split(regExp);
  const reversedStr = arr
    .map((word) =>
      regExp.test(word) ? word : word.split('').reverse().join('')
    )
    .join('');

  return reversedStr;
}

const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim();

console.log(solution(str));
