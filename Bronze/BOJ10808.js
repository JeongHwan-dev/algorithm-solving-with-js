// Solution 1
function solution(str) {
  const alphabetsCount = Array.from({ length: 26 }, () => 0);

  str
    .split('')
    .forEach((alphabet) => (alphabetsCount[alphabet.charCodeAt() - 97] += 1));

  return alphabetsCount.join(' ');
}

const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim();

console.log(solution(str));
