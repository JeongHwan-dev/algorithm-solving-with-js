// Solution 1
function candies(n, arr) {
  const dp = Array.from({ length: n }, () => 1);

  for (let i = 1; i < n; i++) {
    if (arr[i - 1] < arr[i]) {
      dp[i] += dp[i - 1];
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1] && dp[i] <= dp[i + 1]) {
      dp[i] = dp[i + 1] + 1;
    }
  }

  const totalCandyCount = dp.reduce((acc, cur) => acc + cur, 0);

  return totalCandyCount;
}
