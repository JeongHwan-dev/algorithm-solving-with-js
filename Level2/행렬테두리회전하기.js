function solution(rows, columns, queries) {
  const minArr = [];
  const matrix = Array.from({ length: rows }, () => Array(columns).fill(0));
  let n = 1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = n++;
    }
  }

  queries.forEach((query) => {
    const [x1, y1, x2, y2] = query.map((pos) => pos - 1);
    const width = y2 - y1;
    const height = x2 - x1;
    const queue = [];

    for (let i = 0; i < width; i++) {
      queue.push(matrix[x1][y1 + i]);
    }

    for (let i = 0; i < height; i++) {
      queue.push(matrix[x1 + i][y2]);
    }

    for (let i = 0; i < width; i++) {
      queue.push(matrix[x2][y2 - i]);
    }

    for (let i = 0; i < height; i++) {
      queue.push(matrix[x2 - i][y1]);
    }

    queue.unshift(queue.pop());
    minArr.push(Math.min(...queue));

    for (let i = 0; i < width; i++) {
      matrix[x1][y1 + i] = queue.shift();
    }

    for (let i = 0; i < height; i++) {
      matrix[x1 + i][y2] = queue.shift();
    }

    for (let i = 0; i < width; i++) {
      matrix[x2][y2 - i] = queue.shift();
    }

    for (let i = 0; i < height; i++) {
      matrix[x2 - i][y1] = queue.shift();
    }
  });

  return minArr;
}
