// Solution 1
function solution(nums) {
  const oddNums = nums.filter((num) => num % 2 !== 0);

  if (oddNums.length > 0) {
    return oddNums.reduce((acc, cur) => acc * cur, 1);
  }

  return nums.reduce((acc, cur) => acc * cur, 1);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const nums = input.split(' ').map((num) => Number(num));

console.log(solution(nums));
