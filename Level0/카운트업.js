// Solution 1
function solution(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => index + start);
}
