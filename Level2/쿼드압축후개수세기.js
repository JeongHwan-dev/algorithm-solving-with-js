function solution(arr) {
  const count = [0, 0];

  function compressMatrix(matrix, n) {
    const value = matrix[0][0];

    if (n <= 1) {
      count[value]++;
      return;
    }

    const sum = matrix.reduce(
      (sum, row) => sum + row.reduce((acc, cur) => acc + cur),
      0
    );

    if (sum === 0 || sum === n * n) {
      count[value]++;
      return;
    }

    const mid = n / 2;
    const divide1 = matrix.slice(0, mid);
    const divide2 = matrix.slice(mid);

    compressMatrix(
      divide1.map((row) => row.slice(0, mid)),
      mid
    );
    compressMatrix(
      divide1.map((row) => row.slice(mid)),
      mid
    );
    compressMatrix(
      divide2.map((row) => row.slice(0, mid)),
      mid
    );
    compressMatrix(
      divide2.map((row) => row.slice(mid)),
      mid
    );
  }

  compressMatrix(arr, arr.length);

  return count;
}
