// Solution 1
function solution(n, stones, start) {
  const visited = Array.from({ length: n + 1 }, () => false);

  stones.unshift(0);

  function dfs(nStone) {
    if (nStone < 1 || nStone > n) {
      return;
    }

    visited[nStone] = true;

    dfs(nStone + stones[nStone]);
    dfs(nStone - stones[nStone]);
  }

  dfs(start);

  const visitedStoneCount = visited.filter((flag) => flag).length;

  return visitedStoneCount;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const stones = input[1].split(' ').map((value) => parseInt(value));
const start = parseInt(input[2]);

console.log(solution(n, stones, start));
