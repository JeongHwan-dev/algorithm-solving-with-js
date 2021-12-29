// Solution 1
function solution1(n) {
  const primeNumberArray = new Array(n).fill(1);

  primeNumberArray[0] = 0;

  for (let i = 2; i * i <= n; i++) {
    for (let j = i * i; j <= n; j += i) {
      primeNumberArray[j - 1] = 0;
    }
  }

  const primeNumberCount = primeNumberArray.filter((flag) => flag === 1).length;

  return primeNumberCount;
}

// Solution 2
function getPrimeNumberCount(num) {
  const numbers = [false, false, ...Array(num - 1).fill(true)];

  for (let i = 2; i * i <= num; i++) {
    if (numbers[i]) {
      for (let j = i * 2; j <= num; j += i) {
        numbers[j] = false;
      }
    }
  }

  const primeNumberCount = numbers.filter(Boolean).length;

  return primeNumberCount;
}

function solution2(n) {
  const primeNumberCount = getPrimeNumberCount(n);

  return primeNumberCount;
}
