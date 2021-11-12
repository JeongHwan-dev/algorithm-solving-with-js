// Solution 1
function solution1(n) {
  let sumOfDivisors = n;

  for (let num = 1; num <= Math.floor(n / 2); num++) {
    if (n % num === 0) {
      sumOfDivisors += num;
    }
  }

  return sumOfDivisors;
}
