// Solution 1
function solution1(x, n) {
  const result = [];

  result.push(x);

  for (let i = 0; i < n - 1; i++) {
    result.push(result[i] + x);
  }

  return result;
}

// Solution 2
function solution2(x, n) {
  const result = Array.from({ length: n }, (_, index) => x * (index + 1));

  return result;
}
