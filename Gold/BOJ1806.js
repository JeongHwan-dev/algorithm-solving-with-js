// Solution 1
function solution(n, s, nums) {
  let minLength = Number.MAX_SAFE_INTEGER;
  let leftPoint = 0;
  let rightPoint = 0;
  let sum = nums[0];

  while (leftPoint <= rightPoint && rightPoint < n) {
    if (sum < s) {
      rightPoint += 1;
      sum += nums[rightPoint];
    } else {
      minLength = Math.min(minLength, rightPoint - leftPoint + 1);
      sum -= nums[leftPoint];
      leftPoint += 1;
    }
  }

  return minLength > n ? 0 : minLength;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, s] = input[0].split(' ').map((value) => parseInt(value));
const nums = input[1].split(' ').map((value) => parseInt(value));

console.log(solution(n, s, nums));
