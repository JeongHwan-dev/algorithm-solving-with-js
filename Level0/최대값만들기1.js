// Solution 1
function solution1(numbers) {
  const maxNum1 = Math.max(...numbers);
  const indexOfMaxNum1 = numbers.indexOf(maxNum1);
  const maxNum2 = Math.max(
    ...[...numbers.slice(0, indexOfMaxNum1), ...numbers.slice(indexOfMaxNum1 + 1)]
  );

  return maxNum1 * maxNum2;
}

// Solution 2
function solution2(numbers) {
  const sortedNumbers = numbers.sort((a, b) => b - a);

  return sortedNumbers[0] * sortedNumbers[1];
}
