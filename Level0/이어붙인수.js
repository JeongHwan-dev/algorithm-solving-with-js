// Solution 1
function solution(num_list) {
  const evenNumber = Number(num_list.filter((num) => num % 2 === 0).join(''));
  const oddNumber = Number(num_list.filter((num) => num % 2 === 1).join(''));

  return evenNumber + oddNumber;
}
