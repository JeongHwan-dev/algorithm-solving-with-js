// Solution 1
function solution(n) {
  let fiveKgBagCount = 0;
  let threeKgBagCount = 0;

  while (true) {
    if (n % 5 === 0) {
      fiveKgBagCount = n / 5;
      break;
    }

    if (n < 0) {
      return -1;
    }

    n -= 3;
    threeKgBagCount += 1;
  }

  const minTotalBagCount = fiveKgBagCount + threeKgBagCount;

  return minTotalBagCount;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input);

console.log(solution(n));
