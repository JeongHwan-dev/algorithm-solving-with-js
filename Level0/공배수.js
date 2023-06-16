// Solution 1
function solution(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}
