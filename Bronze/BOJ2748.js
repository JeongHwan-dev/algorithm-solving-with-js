// Solution 1
function solution(n) {
  const dp = Array.from({ length: n + 1 }, () => 0);

  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
  }

  return dp[n].toString();
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input);

console.log(solution(n));
