// Solution 1
function solution1(n) {
  let minOperationCount = Number.MAX_SAFE_INTEGER;

  function dfs(l, result) {
    if (l >= minOperationCount) {
      return;
    }

    if (result === 1) {
      minOperationCount = Math.min(minOperationCount, l);
    } else {
      if (result % 3 === 0) {
        dfs(l + 1, result / 3);
      }

      if (result % 2 === 0) {
        dfs(l + 1, result / 2);
      }

      dfs(l + 1, result - 1);
    }
  }

  dfs(0, n);

  return minOperationCount;
}

// Solution 2
function solution2(n) {
  const dp = Array.from({ length: n + 1 }, () => 0);

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }

    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
  }

  return dp[n];
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const n = parseInt(input);

console.log(solution1(n));

console.log(solution2(n));
