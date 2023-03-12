// Solution 1
function solution(s) {
  return [...s]
    .filter((alphabet) => s.indexOf(alphabet) === s.lastIndexOf(alphabet))
    .sort()
    .join('');
}
