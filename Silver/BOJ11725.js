// Solution 1
function solution(n, nodes) {
  const tree = Array.from({ length: n + 1 }, () => []);
  const visited = Array.from({ length: n + 1 }, () => 0);

  for (const [x, y] of nodes) {
    tree[x].push(y);
    tree[y].push(x);
  }

  function bfs() {
    const queue = [];

    visited[1] = 1;

    for (const next of tree[1]) {
      visited[next] = 1;
      queue.push(next);
    }

    while (queue.length !== 0) {
      const node = queue.shift();

      for (const next of tree[node]) {
        if (visited[next]) {
          continue;
        }

        visited[next] = node;
        queue.push(next);
      }
    }
  }

  bfs();

  const results = visited.slice(2).join('\n');

  return results;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const nodes = input
  .slice(1)
  .map((row) => row.split(' ').map((value) => parseInt(value)));

console.log(solution(n, nodes));
