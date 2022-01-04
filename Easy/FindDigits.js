// Solution 1
function findDigits(n) {
  const digitCount = n
    .toString()
    .split('')
    .filter((num) => n % parseInt(num) === 0).length;

  return digitCount;
}
