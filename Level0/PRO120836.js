// Solution 1
function solution(n) {
  const orderedPairList = [];

  for (let i = 1; i <= n / i; i++) {
    const quotient = n / i;

    if (Number.isInteger(quotient)) {
      orderedPairList.push([i, quotient]);

      if (quotient !== i) {
        orderedPairList.push([quotient, i]);
      }
    }
  }

  return orderedPairList.length;
}
