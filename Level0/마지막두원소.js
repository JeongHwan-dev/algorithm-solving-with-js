// Solution 1
function solution(num_list) {
  const lastNum = num_list[num_list.length - 1];
  const lastPrevNum = num_list[num_list.length - 2];

  return [...num_list, lastNum - lastPrevNum > 0 ? lastNum - lastPrevNum : lastNum * 2];
}
