function solution(price, money, count) {
  let answer = 0;

  for (let n = 1; n <= count; n++) {
    money -= price * n;
  }

  if (money < 0) {
    answer = Math.abs(money);
  }

  return answer;
}
