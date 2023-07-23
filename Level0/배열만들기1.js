// Solution 1
function solution(n, k) {
  return Array.from({ length: Math.floor(n / k) }, (_, index) => k * (index + 1));
}
