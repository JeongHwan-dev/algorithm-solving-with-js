// Solution 1
function solution(n) {
  const isEvenNumber = n % 2 === 0;
  let sum = 0;

  if (isEvenNumber) {
    for (let i = 2; i <= n; i += 2) {
      sum += Math.pow(i, 2);
    }

    return sum;
  }

  for (let i = 1; i <= n; i += 2) {
    sum += i;
  }

  return sum;
}
