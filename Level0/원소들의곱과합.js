// Solution 1
function solution1(num_list) {
  const result = num_list.reduce(
    (acc, cur) => ({
      add: acc.add + cur,
      multiply: acc.multiply * cur,
    }),
    {
      add: 0,
      multiply: 1,
    }
  );

  return result.add ** 2 > result.multiply ? 1 : 0;
}

// Solution 2
const sum = (array) => array.reduce((acc, cur) => acc + cur, 0);

const multiply = (array) => array.reduce((acc, cur) => acc * cur, 1);

function solution2(num_list) {
  return multiply(num_list) < sum(num_list) ** 2 ? 1 : 0;
}
