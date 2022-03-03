// Solution 1
function solution(n) {
  const dp = [0, 1, 2, 4];

  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  return dp[n];
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const T = input[0];
const data = [];

for (let i = 1; i < input.length; i++) {
  data.push(input[i]);
}

for (let i = 0; i < T; i++) {
  const result = solution(data[i]);

  console.log(result);
}
