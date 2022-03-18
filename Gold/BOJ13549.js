// Solution 1
function solution(n, k) {
  const visited = Array.from({ length: 100001 }, () => false);

  function bfs(n) {
    const queue = [];

    queue.push([n, 0]);
    visited[n] = true;

    while (queue.length !== 0) {
      const [position, seconds] = queue.shift();

      if (position === k) {
        return seconds;
      }

      for (const next of [position * 2, position - 1, position + 1]) {
        if (!visited[next] && next >= 0 && next <= 100000) {
          visited[next] = true;

          if (next === position * 2) {
            queue.unshift([next, seconds]);
          } else {
            queue.push([next, seconds + 1]);
          }
        }
      }
    }
  }

  const minSeconds = bfs(n);

  return minSeconds;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const [n, k] = input.split(' ').map((value) => parseInt(value));

console.log(solution(n, k));
