// Solution 1
function solution(n, points) {
  const dp = Array.from({ length: n + 1 }, () => 0);

  dp[0] = points[0];
  dp[1] = points[0] + points[1];
  dp[2] = Math.max(points[0] + points[2], points[1] + points[2]);

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(
      points[i] + points[i - 1] + dp[i - 3],
      points[i] + dp[i - 2]
    );
  }

  return dp[n - 1];
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const points = input.slice(1).map((value) => parseInt(value));

console.log(solution(n, points));
