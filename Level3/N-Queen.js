// Solution 1
function check(queen, row) {
  for (let i = 0; i < row; i++) {
    if (
      queen[i] === queen[row] ||
      Math.abs(queen[i] - queen[row]) === row - i
    ) {
      return false;
    }
  }

  return true;
}

function search(queen, row) {
  const n = queen.length;
  let count = 0;

  if (n === row) {
    return 1;
  }

  for (let col = 0; col < n; col++) {
    queen[row] = col;

    if (check(queen, row)) {
      count += search(queen, row + 1);
    }
  }

  return count;
}

function solution1(n) {
  const initalArray = Array.from({ length: n }, () => 0);
  const solutionCount = search(initalArray, 0);

  return solutionCount;
}
