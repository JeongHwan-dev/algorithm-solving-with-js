// Solution 1
function solution1(a, b) {
  let inner = 0;

  for (let i = 0; i < a.length; i++) {
    inner += a[i] * b[i];
  }

  return inner;
}

// Solution 2
function solution2(a, b) {
  const inner = a.reduce((acc, cur, index) => acc + cur * b[index], 0);

  return inner;
}
