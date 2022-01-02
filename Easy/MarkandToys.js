function maximumToys(prices, k) {
  const _prices = prices.slice();
  let totalPrice = 0;
  let maxToyCount = 0;

  _prices.sort((a, b) => a - b);

  for (const price of _prices) {
    if (totalPrice + price < k) {
      totalPrice += price;
      maxToyCount++;
    } else {
      break;
    }
  }

  return maxToyCount;
}
