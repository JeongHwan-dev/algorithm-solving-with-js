// Solution 1
function solution(num_str) {
  return [...num_str].reduce((acc, cur) => acc + Number(cur), 0);
}
