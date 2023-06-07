// Solution 1
function solution1(numbers, n) {
  let sum = 0;

  for (const num of numbers) {
    sum += num;

    if (sum > n) {
      break;
    }
  }

  return sum;
}

// Solution 2
function solution2(numbers, n) {
  const _numbers = numbers.slice();
  let sum = 0;

  while (sum <= n) {
    sum += _numbers.shift();
  }

  return sum;
}
