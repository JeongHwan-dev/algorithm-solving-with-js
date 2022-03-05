// Solution 1
function solution(n, board) {
  const results = [];
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let index = 0;

  function dfs(x, y) {
    for (let i = 0; i < 4; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];

      if (
        newX >= 0 &&
        newX < n &&
        newY >= 0 &&
        newY < n &&
        board[newX][newY] === 1
      ) {
        board[newX][newY] = 0;
        results[index] += 1;
        dfs(newX, newY);
      }
    }
  }

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (board[x][y] === 1) {
        board[x][y] = 0;
        results.push(1);
        dfs(x, y);
        index += 1;
      }
    }
  }

  results.sort((a, b) => a - b);

  return results.length + '\n' + results.join('\n');
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const board = [];

for (let i = 1; i < input.length; i++) {
  board.push(input[i].split('').map((value) => parseInt(value)));
}

console.log(solution(n, board));
