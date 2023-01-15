// Solution 1
const LAMP_SKEWERS_PRICE = 12000;
const BEVERAGE_PRICE = 2000;

function solution(n, k) {
  return LAMP_SKEWERS_PRICE * n + BEVERAGE_PRICE * (k - parseInt(n / 10));
}
