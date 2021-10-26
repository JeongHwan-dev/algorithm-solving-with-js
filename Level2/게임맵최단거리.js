function solution(maps) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const targetX = maps.length - 1;
  const targetY = maps[0].length - 1;
  const visitCount = Array.from({ length: maps.length }, () =>
    Array(maps[0].length).fill(0)
  );
  const queue = [[0, 0]];

  visitCount[0][0] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx <= targetX && ny >= 0 && ny <= targetY) {
        if (maps[nx][ny] === 1 && visitCount[nx][ny] === 0) {
          visitCount[nx][ny] = visitCount[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  const count =
    visitCount[targetX][targetY] === 0 ? -1 : visitCount[targetX][targetY];

  return count;
}
