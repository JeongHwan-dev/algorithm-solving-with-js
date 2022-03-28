// Solution 1
function solution(n, pair) {
  const graph = Array.from({ length: n + 1 }, () => []);
  let invitationCount = -1;

  for (const [x, y] of pair) {
    graph[x].push(y);
    graph[y].push(x);
  }

  function bfs(start) {
    const visited = Array.from({ length: n + 1 }, () => false);
    const queue = [];

    visited[start] = true;
    queue.push([start, 0]);

    while (queue.length > 0) {
      [num, depth] = queue.shift();

      if (depth <= 2) {
        invitationCount += 1;
      }

      for (const nextNum of graph[num]) {
        if (!visited[nextNum]) {
          visited[nextNum] = true;
          queue.push([nextNum, depth + 1]);
        }
      }
    }
  }

  bfs(1);

  return invitationCount;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const m = parseInt(input[1]);
const pair = input
  .slice(2)
  .map((row) => row.split(' ').map((value) => parseInt(value)));

console.log(solution(n, pair));
