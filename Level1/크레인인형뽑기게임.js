// Solution 1
function solution1(board, moves) {
  const _board = board.map((row) => row.slice());
  const stack = [];
  let popCount = 0;

  for (const n of moves) {
    const idx = n - 1;

    for (let r = 0; r < _board.length; r++) {
      if (_board[r][idx] !== 0) {
        stack.push(_board[r][idx]);
        _board[r][idx] = 0;
        break;
      }
    }

    const sLen = stack.length;

    if (sLen >= 2 && stack[sLen - 1] === stack[sLen - 2]) {
      stack.pop();
      stack.pop();
      popCount += 2;
    }
  }

  return popCount;
}

// Solution 2
function solution(board, moves) {
  const _board = board.map((row) => row.slice());
  const stack = [];
  let popCount = 0;

  moves.forEach((move) => {
    const y = move - 1;

    for (let x = 0; x < _board.length; x++) {
      const item = _board[x][y];

      if (item !== 0) {
        if (stack.length > 0 && stack[stack.length - 1] === item) {
          stack.pop();
          popCount += 2;
        } else {
          stack.push(item);
        }

        _board[x][y] = 0;

        break;
      }
    }
  });

  return popCount;
}
