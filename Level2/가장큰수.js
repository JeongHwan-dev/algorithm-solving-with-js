// Solution 1
function solution1(numbers) {
  const _numbers = numbers.slice();
  const maxNumber = _numbers
    .map((number) => String(number))
    .sort((a, b) => b + a - (a + b))
    .join('');

  return maxNumber[0] === '0' ? '0' : maxNumber;
}

// Solution 2
function solution2(numbers) {
  const _numbers = numbers.slice();
  const maxNumber = _numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');

  return maxNumber[0] === '0' ? '0' : maxNumber;
}
