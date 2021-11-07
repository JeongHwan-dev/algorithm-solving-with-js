// Solution 1
function solution1(price, money, count) {
  let result = 0;

  for (let n = 1; n <= count; n++) {
    money -= price * n;
  }

  if (money < 0) {
    result = Math.abs(money);
  }

  return result;
}

// Solution 2
function solution2(price, money, count) {
  for (let n = 1; n <= count; n++) {
    money -= price * n;
  }

  const result = money < 0 ? Math.abs(money) : 0;

  return result;
}

// Solution 3
function solution3(price, money, count) {
  let totalPrice = 0;

  for (let n = 1; n <= count; n++) {
    totalPrice += price * n;
  }

  const result = money - totalPrice > 0 ? 0 : totalPrice - money;

  return result;
}
