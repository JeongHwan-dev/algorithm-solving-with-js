function rotateMatrix(matrix) {
  const R = matrix.length;
  const C = matrix[0].length;
  const rotatedMatrix = [];

  for (let y = 0; y < C; y++) {
    const row = [];

    for (let x = R - 1; x >= 0; x--) {
      row.push(matrix[x][y]);
    }

    rotatedMatrix.push(row);
  }

  return rotatedMatrix;
}

function checkBlockPop(block) {
  const flattenedBlock = block.flat();
  const target = flattenedBlock[0];

  if (flattenedBlock.length !== 4) {
    return false;
  }

  for (let i = 1; i < 4; i++) {
    if (flattenedBlock[i] !== target) {
      return false;
    }
  }

  return true;
}

function solution(m, n, board) {
  const _board = rotateMatrix(board.map((row) => row.slice().split('')));
  let score = 0;

  function pop(records) {
    records.forEach((record) => {
      const [x, y] = record;

      _board[x][y] = '';
      _board[x][y + 1] = '';
      _board[x + 1][y] = '';
      _board[x + 1][y + 1] = '';
    });

    for (let x = 0; x < n; x++) {
      for (let y = 0; y < m; y++) {
        if (_board[x][y] === '') {
          _board[x].splice(y--, 1);
          score++;
        }
      }
    }
  }

  while (true) {
    const records = [];

    for (let x = 0; x < n - 1; x++) {
      for (let y = 0; y < m - 1; y++) {
        const block = [
          _board[x].slice(y, y + 2),
          _board[x + 1].slice(y, y + 2),
        ];

        if (checkBlockPop(block)) {
          records.push([x, y]);
        }
      }
    }

    if (records.length === 0) {
      break;
    }

    pop(records);
  }

  return score;
}
