// Solution 1
function solution(n, k, nums) {
  const count = Array.from({ length: 1000001 }, () => 0);
  let maxLength = Number.MIN_SAFE_INTEGER;
  let leftPoint = 0;
  let rightPoint = 0;

  while (rightPoint < n) {
    if (count[nums[rightPoint]] < k) {
      count[nums[rightPoint]] += 1;
      rightPoint += 1;
    } else {
      count[nums[leftPoint]] -= 1;
      leftPoint += 1;
    }

    maxLength = Math.max(maxLength, rightPoint - leftPoint);
  }

  return maxLength;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map((value) => parseInt(value));
const nums = input[1].split(' ').map((value) => parseInt(value));

console.log(solution(n, k, nums));
