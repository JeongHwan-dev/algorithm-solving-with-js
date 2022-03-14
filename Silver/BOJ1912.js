// Solution 1
function solution(n, nums) {
  const dp = Array.from({ length: n }, () => 0);

  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
  }

  const maxSum = Math.max(...dp);

  return maxSum;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const nums = input[1].split(' ').map((value) => parseInt(value));

console.log(solution(n, nums));
