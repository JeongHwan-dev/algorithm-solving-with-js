// Solution 1
function solution(n, consultations) {
  const dp = Array.from({ length: n }, () => 0);

  for (let i = 0; i < n; i++) {
    const [day, profit] = consultations[i];

    if (i + day > n) {
      continue;
    }

    dp[i] += profit;

    for (let j = i + day; j < n; j++) {
      dp[j] = Math.max(dp[j], dp[i]);
    }
  }

  const maxProfit = Math.max(...dp);

  return maxProfit;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const consultations = input
  .slice(1)
  .map((row) => row.split(' ').map((value) => parseInt(value)));

console.log(solution(n, consultations));
