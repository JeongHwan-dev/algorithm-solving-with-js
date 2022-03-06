// Solution 1
function solution(n, m, arr) {
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const visited = Array.from({ length: n + 1 }, () => false);
  const computersWithVirus = [];

  for (const [x, y] of arr) {
    graph[x][y] = 1;
    graph[y][x] = 1;
  }

  function dfs(l, count) {
    for (let i = 1; i <= n; i++) {
      if (graph[l][i] === 1 && !visited[i]) {
        visited[i] = true;
        computersWithVirus.push(i);
        dfs(i, count + 1);
      }
    }
  }

  visited[1] = true;
  dfs(1, 1);

  return computersWithVirus.length;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const m = parseInt(input[1]);
const arr = [];

for (let i = 2; i < input.length; i++) {
  arr.push(input[i].split(' ').map((value) => parseInt(value)));
}

console.log(solution(n, m, arr));
