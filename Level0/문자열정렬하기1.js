// Solution 1
function solution(my_string) {
  return [...my_string]
    .filter((str) => !isNaN(str))
    .map((str) => Number(str))
    .sort((a, b) => a - b);
}
