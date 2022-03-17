// Solution 1
function solution(n, lines) {
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const visited = Array.from({ length: n + 1 }, () => false);
  let connectedComponentCount = 0;

  for (const [x, y] of lines) {
    graph[x][y] = 1;
    graph[y][x] = 1;
  }

  function dfs(l) {
    for (let i = 1; i <= n; i++) {
      if (graph[l][i] === 1 && !visited[i]) {
        visited[i] = true;
        dfs(i);
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(i);
      connectedComponentCount += 1;
    }
  }

  return connectedComponentCount;
}

// Solution 2
function solution2(n, lines) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array.from({ length: n + 1 }, () => false);
  let connectedComponentCount = 0;

  for (const [x, y] of lines) {
    graph[x].push(y);
    graph[y].push(x);
  }

  function dfs(start) {
    visited[start] = true;

    for (let i = 0; i < graph[start].length; i++) {
      const next = graph[start][i];

      if (!visited[next]) {
        dfs(next);
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      dfs(i);
      connectedComponentCount += 1;
    }
  }

  return connectedComponentCount;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map((value) => parseInt(value));
const lines = input
  .slice(1)
  .map((row) => row.split(' ').map((value) => parseInt(value)));

console.log(solution1(n, lines));

console.log(solution2(n, lines));
