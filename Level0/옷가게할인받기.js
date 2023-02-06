// Solution 1
function solution1(price) {
  if (price >= 500000) {
    return parseInt(price * 0.8);
  }

  if (price >= 300000) {
    return parseInt(price * 0.9);
  }

  if (price >= 100000) {
    return parseInt(price * 0.95);
  }

  return price;
}

// Solution 2
const DISCOUNT_INFO_LIST = [
  {
    minCost: 500000,
    discountRate: 20,
  },
  {
    minCost: 300000,
    discountRate: 10,
  },
  {
    minCost: 100000,
    discountRate: 5,
  },
];

function solution2(price) {
  const discountInfoListOrderByDesc = DISCOUNT_INFO_LIST.sort((a, b) => b.minCost - a.minCost);

  for (const { minCost, discountRate } of discountInfoListOrderByDesc) {
    if (price >= minCost) {
      return parseInt((price * (100 - discountRate)) / 100);
    }
  }

  return price;
}
