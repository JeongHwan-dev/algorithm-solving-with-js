// Solution 1
function solution(n) {
  return Array.from({ length: n }, (_, index) => index + 1).filter((num) => n % num === 0);
}
