// Solution 1
function sockMerchant(n, ar) {
  const arMap = new Map();
  let pairCount = 0;

  for (const num of ar) {
    arMap.has(num) ? arMap.set(num, arMap.get(num) + 1) : arMap.set(num, 1);
  }

  for (const [num, count] of arMap) {
    pairCount += Math.floor(count / 2);
  }

  return pairCount;
}
