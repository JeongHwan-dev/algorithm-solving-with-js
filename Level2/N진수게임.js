function solution(n, t, m, p) {
  const convertedNumbers = [];
  const minimumLength = m * t;
  let decimalNumber = 0;
  let count = 0;
  let result = '';

  while (convertedNumbers.length <= minimumLength) {
    convertedNumbers.push(...decimalNumber.toString(n).split(''));
    decimalNumber++;
  }

  while (count++ < t) {
    result += convertedNumbers[p - 1];
    p += m;
  }

  result = result.toUpperCase();

  return result;
}
