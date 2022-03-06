// Solution 1
function solution(n, wires) {
  let minCount = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < wires.length; i++) {
    const path = [];
    const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
    const visited = Array.from({ length: n + 1 }, () => false);

    for (let j = 0; j < wires.length; j++) {
      if (j === i) {
        continue;
      }

      const [x, y] = wires[j];

      graph[x][y] = 1;
      graph[y][x] = 1;
    }

    function dfs(l) {
      for (let i = 1; i <= n; i++) {
        if (graph[l][i] === 1 && !visited[i]) {
          visited[i] = true;
          path.push(i);
          dfs(i);
        }
      }
    }

    path.push(1);
    visited[1] = true;
    dfs(1);

    minCount = Math.min(minCount, Math.abs(n - path.length - path.length));
  }

  return minCount;
}
