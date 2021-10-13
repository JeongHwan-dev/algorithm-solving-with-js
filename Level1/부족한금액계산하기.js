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
