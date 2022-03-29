// Solution 1
function solution(n, points) {
  const dx = [-2, -2, 0, 0, 2, 2];
  const dy = [-1, 1, -2, 2, -1, 1];
  const [startX, startY] = [points[0], points[1]];
  const [endX, endY] = [points[2], points[3]];
  const visited = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));
  let minMoveCount = -1;

  function bfs(x, y) {
    const queue = [];

    queue.push([x, y, 0]);
    visited[x][y] = true;

    while (queue.length > 0) {
      const [currentX, currentY, count] = queue.shift();

      for (let i = 0; i < 6; i++) {
        const nextX = currentX + dx[i];
        const nextY = currentY + dy[i];

        if (
          nextX < 0 ||
          nextX > n ||
          nextY < 0 ||
          nextY > n ||
          visited[nextX][nextY]
        ) {
          continue;
        }

        if (nextX === endX && nextY === endY) {
          minMoveCount = count + 1;
          return;
        }

        visited[nextX][nextY] = true;
        queue.push([nextX, nextY, count + 1]);
      }
    }
  }

  bfs(startX, startY);

  return minMoveCount;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const points = input[1].split(' ').map((value) => parseInt(value));

console.log(solution(n, points));
