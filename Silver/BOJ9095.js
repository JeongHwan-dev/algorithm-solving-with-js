// Solution 1
function solution1(n) {
  const dp = [0, 1, 2, 4];

  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  return dp[n];
}

// Solution 2
function getCombinationCount(num) {
  const dp = Array.from({ length: num + 1 }, () => 0);

  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i <= num; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  return dp[num];
}

function solution2(nums) {
  const results = [];

  for (const num of nums) {
    const combinationCount = getCombinationCount(num);

    results.push(combinationCount);
  }

  return results.join('\n');
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const T = input[0];
const data = [];

for (let i = 1; i < input.length; i++) {
  data.push(input[i]);
}

for (let i = 0; i < T; i++) {
  const result = solution1(data[i]);

  console.log(result);
}

console.log(solution2(data));
