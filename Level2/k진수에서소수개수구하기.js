// Solution 1
function isPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= parseInt(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(n, k) {
  const convertedNum = n.toString(k);
  const primeNumberCount = convertedNum
    .split('0')
    .filter((num) => num !== '')
    .filter((num) => isPrimeNumber(parseInt(num))).length;

  return primeNumberCount;
}
