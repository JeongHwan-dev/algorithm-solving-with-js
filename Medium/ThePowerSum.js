// Solution 1
function powerSum(X, N) {
  let permutationCount = 0;

  function dfs(l, sum) {
    if (sum === X) {
      permutationCount += 1;
      return;
    }

    if (l > Math.pow(X, 1.0 / N) || sum > X) {
      return;
    } else {
      dfs(l + 1, sum + l ** N);
      dfs(l + 1, sum);
    }
  }

  dfs(1, 0);

  return permutationCount;
}
