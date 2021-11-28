// Solution 1
function solution1(n) {
  let result = 0;

  if (Number.isInteger(Math.sqrt(n))) {
    result = Math.pow(Math.sqrt(n) + 1, 2);
  } else {
    result = -1;
  }

  return result;
}

// Solution 2
function solution2(n) {
  const sqrtN = Math.sqrt(n);
  const result = Number.isInteger(sqrtN) ? Math.pow(sqrtN + 1, 2) : -1;

  return result;
}

// Solution 3
function solution3(n) {
  const result = Number.isInteger(Math.sqrt(n))
    ? Math.pow(Math.sqrt(n) + 1, 2)
    : -1;

  return result;
}

// Solution 4
function solution4(n) {
  const result = Math.sqrt(n) % 1 === 0 ? Math.pow(Math.sqrt(n) + 1, 2) : -1;

  return result;
}
