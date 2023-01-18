const ICE_AMERICANO_PRICE = 5500;

// Solution 1
function solution(money) {
  const maxIceAmericanoCount = Math.floor(money / ICE_AMERICANO_PRICE);
  const change = money - ICE_AMERICANO_PRICE * maxIceAmericanoCount;

  return [maxIceAmericanoCount, change];
}

// Solution 2
function solution2(money) {
  return [Math.floor(money / ICE_AMERICANO_PRICE), money % ICE_AMERICANO_PRICE];
}
