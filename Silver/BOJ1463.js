// Solution 1
function solution(n) {
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

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const n = Number(input);

console.log(solution(n));
