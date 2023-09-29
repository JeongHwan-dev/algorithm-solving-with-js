// Solution 1
function solution(num_list) {
  return num_list
    .slice()
    .sort((a, b) => a - b)
    .slice(0, 5);
}
