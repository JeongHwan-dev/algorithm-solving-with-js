// Solution 1
function beautifulDays(i, j, k) {
  let integerCount = 0;

  for (let num = i; num <= j; num++) {
    const reversedNum = parseInt(num.toString().split('').reverse().join(''));
    const calculations = Math.abs(num - reversedNum) / k;

    if (Number.isInteger(calculations)) {
      integerCount++;
    }
  }

  return integerCount;
}
