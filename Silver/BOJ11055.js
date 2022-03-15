// Solution 1
function solution1(n, nums) {
  const dp = Array.from({ length: n }, () => 0);

  for (let i = 0; i < n; i++) {
    const values = [nums[i]];

    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        values.push(dp[j] + nums[i]);
      }
    }

    dp[i] = Math.max(...values);
  }

  const maxSum = Math.max(...dp);

  return maxSum;
}

// Solution 2
function solution2(n, nums) {
  const dp = Array.from({ length: n }, () => 0);

  for (let i = 0; i < n; i++) {
    dp[i] = nums[i];

    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + nums[i]);
      }
    }
  }

  const maxSum = Math.max(...dp);

  return maxSum;
}

// Solution 3
function solution3(n, nums) {
  const dp = Array.from({ length: n }, (_, index) => nums[index]);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + nums[i]);
      }
    }
  }

  const maxSum = Math.max(...dp);

  return maxSum;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const nums = input[1].split(' ').map((value) => parseInt(value));

console.log(solution1(n, nums));

console.log(solution2(n, nums));

console.log(solution3(n, nums));
