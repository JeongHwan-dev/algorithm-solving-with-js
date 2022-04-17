// Solution 1
function solution(n, m, nums) {
  const sortedNums = nums.slice().sort((a, b) => a - b);
  let minGap = Number.MAX_SAFE_INTEGER;

  for (let leftPoint = 0; leftPoint < n - 1; leftPoint++) {
    let rightPoint = leftPoint + 1;

    while (rightPoint < n) {
      const gap = sortedNums[rightPoint] - sortedNums[leftPoint];

      if (gap >= m) {
        minGap = Math.min(minGap, gap);
        break;
      }

      rightPoint += 1;
    }
  }

  return minGap;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map((value) => Number(value));
const nums = input.slice(1).map((value) => Number(value));

console.log(solution(n, m, nums));
