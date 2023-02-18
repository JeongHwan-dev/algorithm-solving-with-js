// Solution 1
function solution1(numbers) {
  const sortedNumbers = numbers.slice().sort((a, b) => b - a);

  const result1 = sortedNumbers[0] * sortedNumbers[1];

  if (
    sortedNumbers[sortedNumbers.length - 1] >= 0 &&
    sortedNumbers[sortedNumbers.length - 2] >= 0
  ) {
    return result1;
  }

  const result2 = sortedNumbers[sortedNumbers.length - 1] * sortedNumbers[sortedNumbers.length - 2];

  return result1 > result2 ? result1 : result2;
}

// Solution 2
function solution2(numbers) {
  const sortedNumbers = numbers.slice().sort((a, b) => b - a);

  return Math.max(sortedNumbers[0] * sortedNumbers[1], sortedNumbers.at(-1) * sortedNumbers.at(-2));
}
