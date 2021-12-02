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
