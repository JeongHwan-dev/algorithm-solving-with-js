// Solution 1
function solution(array) {
  const maxNum = Math.max(...array);

  return [maxNum, array.indexOf(maxNum)];
}
