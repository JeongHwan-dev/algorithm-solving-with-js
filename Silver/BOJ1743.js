// Solution 1
function solution(n, m, points) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const graph = Array.from({ length: n }, () => Array(m).fill(0));
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  let maxCount = Number.MIN_SAFE_INTEGER;

  for (const [x, y] of points) {
    graph[x - 1][y - 1] = 1;
  }

  function bfs(x, y) {
    const queue = [];
    let count = 1;

    queue.push([x, y]);
    visited[x][y] = true;

    while (queue.length > 0) {
      const [currentX, currentY] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const newX = currentX + dx[i];
        const newY = currentY + dy[i];

        if (
          newX >= 0 &&
          newX < n &&
          newY >= 0 &&
          newY < m &&
          graph[newX][newY] === 1 &&
          !visited[newX][newY]
        ) {
          count += 1;
          queue.push([newX, newY]);
          visited[newX][newY] = true;
        }
      }
    }

    return count;
  }

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (graph[x][y] === 1 && !visited[x][y]) {
        maxCount = Math.max(maxCount, bfs(x, y));
      }
    }
  }

  return maxCount;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m, k] = input[0].split(' ').map((value) => parseInt(value));
const points = input
  .slice(1)
  .map((row) => row.split(' ').map((value) => parseInt(value)));

console.log(solution(n, m, points));
