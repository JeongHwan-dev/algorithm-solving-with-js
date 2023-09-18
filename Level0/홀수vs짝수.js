// Solution 1
function solution(num_list) {
  const result = num_list.reduce(
    (acc, cur, index) => (index % 2 === 0 ? [acc[0] + cur, acc[1]] : [acc[0], acc[1] + cur]),
    [0, 0]
  );

  return result[0] >= result[1] ? result[0] : result[1];
}

console.log(solution([4, 2, 6, 1, 7, 6]));
