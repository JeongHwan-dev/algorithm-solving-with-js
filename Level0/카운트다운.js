// Solution 1
function solution(start, end) {
  return Array.from({ length: start - end + 1 }, (_, index) => start - index);
}
