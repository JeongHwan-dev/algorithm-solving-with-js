// Solution 1
function solution(n, m, v, lines) {
  const dfsGraph = [];
  const bfsGraph = [];
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const dfsVisited = Array.from({ length: n + 1 }, () => false);
  const bfsVisited = Array.from({ length: n + 1 }, () => false);

  lines.forEach((line) => {
    const [x, y] = line;

    graph[x][y] = 1;
    graph[y][x] = 1;
  });

  function dfs(v) {
    dfsVisited[v] = true;
    dfsGraph.push(v);

    for (let i = 1; i <= n; i++) {
      if (graph[v][i] === 1 && !dfsVisited[i]) {
        dfs(i);
      }
    }
  }

  function bfs(v) {
    const queue = [];

    queue.push(v);
    bfsGraph.push(v);

    while (queue.length !== 0) {
      const value = queue.shift();

      bfsVisited[value] = true;

      for (let i = 1; i <= n; i++) {
        if (graph[value][i] === 1 && !bfsVisited[i]) {
          bfsVisited[i] = true;
          queue.push(i);
          bfsGraph.push(i);
        }
      }
    }
  }

  dfs(v);
  bfs(v);

  const results = [dfsGraph.join(' '), bfsGraph.join(' ')].join('\n');

  return results;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m, v] = input[0].split(' ').map((value) => parseInt(value));
const lines = input
  .slice(1)
  .map((row) => row.split(' ').map((value) => parseInt(value)));

console.log(solution(n, m, v, lines));
