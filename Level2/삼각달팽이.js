function solution(n) {
  const snail = new Array(n).fill().map((_, index) => new Array(index + 1));
  let count = 0;
  let x = -1;
  let y = 0;

  while (n > 0) {
    for (let i = 0; i < n; i++) {
      snail[++x][y] = ++count;
    }
    for (let i = 0; i < n - 1; i++) {
      snail[x][++y] = ++count;
    }
    for (let i = 0; i < n - 2; i++) {
      snail[--x][--y] = ++count;
    }

    n -= 3;
  }

  return snail.flat();
}
