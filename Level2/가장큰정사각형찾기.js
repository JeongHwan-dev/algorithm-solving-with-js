function solution(board) {
  const dx = [0, -1, -1];
  const dy = [-1, -1, 0];
  const xLength = board.length;
  const yLength = board[0].length;
  let maxSide = 0;
  let area;

  if (xLength < 2 || yLength < 2) {
    return 1;
  }

  for (let x = 1; x < xLength; x++) {
    for (let y = 1; y < yLength; y++) {
      if (board[x][y] !== 0) {
        const temp = [];

        for (let i = 0; i < 3; i++) {
          temp.push(board[x + dx[i]][y + dy[i]]);
        }

        const min = Math.min(...temp);

        board[x][y] = min + 1;
      }

      if (board[x][y] > maxSide) {
        maxSide = board[x][y];
      }
    }
  }

  area = maxSide * maxSide;

  return area;
}
