// Solution 1
function solution1(n) {
  const numArray = n
    .toString()
    .split('')
    .map((num) => Number(num))
    .reverse();

  return numArray;
}

// Solution 2
function solution2(n) {
  const numArray = String(n)
    .split('')
    .map((num) => parseInt(num))
    .reverse();

  return numArray;
}
