// Solution 1
function solution1(n) {
  const arr = n
    .toString()
    .split('')
    .map((num) => Number(num));

  arr.sort((a, b) => b - a);

  const descNums = Number(arr.join(''));

  return descNums;
}

// Solution 2
function solution2(n) {
  const descNums = parseInt(
    n
      .toString()
      .split('')
      .map((num) => parseInt(num))
      .sort((a, b) => b - a)
      .join('')
  );

  return descNums;
}
