// Solution 1
function solution1(n, computers) {
  let networkCount = 0;
  const visited = Array.from({ length: n }, () => false);

  function dfs(index) {
    visited[index] = true;

    for (let i = 0; i < n; i++) {
      if (computers[index][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      networkCount += 1;
    }
  }

  return networkCount;
}
