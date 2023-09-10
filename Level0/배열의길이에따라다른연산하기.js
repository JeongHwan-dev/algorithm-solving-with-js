// Solution 1
function solution(arr, n) {
  return arr.map((num, index) => (arr.length % 2 === index % 2 ? num : num + n));
}
