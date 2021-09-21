// Math.min(), max() 메서드를 이용한 솔루션1
function solution1(A, B) {
  let minSum = 0;
  const n = A.length;

  for (let i = 0; i < n; i++) {
    const minA = Math.min(...A);
    const maxB = Math.max(...B);

    minSum += minA * maxB;

    const idxA = A.indexOf(minA);
    const idxB = B.indexOf(maxB);

    A.splice(idxA, 1);
    B.splice(idxB, 1);
  }

  return minSum;
}

// sort() 메서드를 이용한 솔루션2
function solution2(A, B) {
  let minSum = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  minSum = A.reduce((acc, cur, idx) => acc + cur * B[idx], 0);

  return minSum;
}
