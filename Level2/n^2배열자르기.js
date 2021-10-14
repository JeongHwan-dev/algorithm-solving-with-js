function solution(n, left, right) {
  const result = [];
  const start = Math.floor(left / n);
  let count = start * n;

  loop: {
    for (let x = start; x < n; x++) {
      for (let y = 0; y < n; y++) {
        count++;

        if (count > left) {
          result.push(Math.max(x, y) + 1);
        }

        if (count === right + 1) {
          break loop;
        }
      }
    }
  }

  return result;
}
