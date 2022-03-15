// Solution 1
function solution(n, nums) {
  const dp = Array.from({ length: n }, () => 1);

  for (let i = 1; i < n; i++) {
    const values = [1];

    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        values.push(dp[j] + 1);
      }
    }

    dp[i] = Math.max(...values);
  }

  const maxLength = Math.max(...dp);

  return maxLength;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const nums = input[1].split(' ').map((value) => parseInt(value));

console.log(solution(n, nums));
