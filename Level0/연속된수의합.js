// Solution 1
function solution(num, total) {
  const baseNum =
    (total - Array.from({ length: num }, (_, index) => index).reduce((acc, cur) => acc + cur, 0)) /
    num;

  return Array.from({ length: num }, (_, index) => baseNum + index);
}
