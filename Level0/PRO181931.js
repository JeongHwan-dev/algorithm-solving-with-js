// Solution 1
function solution(a, d, included) {
  return included.reduce((acc, cur, index) => (cur ? acc + a + d * index : acc), 0);
}
