// Solution 1
function solution(strArr) {
  return strArr.map((str, index) => (index % 2 === 0 ? str.toLowerCase() : str.toUpperCase()));
}
