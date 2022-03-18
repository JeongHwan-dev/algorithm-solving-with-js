// Solution 1
function solution(n, m, graph) {
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const distanceGraph = Array.from({ length: n }, () => Array(m).fill(-1));

  function bfs(x, y) {
    const queue = [];

    queue.push([x, y, 0]);
    visited[x][y] = true;

    while (queue.length !== 0) {
      const [x, y, distance] = queue.shift();

      distanceGraph[x][y] = distance;

      for (const [newX, newY] of [
        [x + 1, y],
        [x, y + 1],
        [x - 1, y],
        [x, y - 1],
      ]) {
        if (
          newX >= 0 &&
          newX < n &&
          newY >= 0 &&
          newY < m &&
          !visited[newX][newY] &&
          graph[newX][newY] === 1
        ) {
          visited[newX][newY] = true;
          queue.push([newX, newY, distance + 1]);
        }
      }
    }
  }

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (graph[x][y] === 2) {
        bfs(x, y);
      } else if (graph[x][y] === 0) {
        distanceGraph[x][y] = 0;
      }
    }
  }

  const result = distanceGraph.map((row) => row.join(' ')).join('\n');

  return result;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map((value) => parseInt(value));
const graph = input
  .slice(1)
  .map((row) => row.split(' ').map((value) => parseInt(value)));

console.log(solution(n, m, graph));
