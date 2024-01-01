// Solution 1
function solution(numList, n) {
  return numList.slice().sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
