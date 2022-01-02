function getMoneySpent(keyboards, drives, b) {
  let maxTotalPrice = -1;

  for (const keyboardPrice of keyboards) {
    for (const drivePrice of drives) {
      const totalPrice = keyboardPrice + drivePrice;

      if (totalPrice <= b && totalPrice > maxTotalPrice) {
        maxTotalPrice = totalPrice;
      }
    }
  }

  return maxTotalPrice;
}
