// Solution 1
function solution(n, nums) {
  const commonDivisors = [];

  if (n === 2) {
    const minNum = Math.min(nums[0], nums[1]);

    for (let i = 1; i <= minNum; i++) {
      if (nums[0] % i === 0 && nums[1] % i === 0) {
        commonDivisors.push(i);
      }
    }
  } else {
    const minNum = Math.min(nums[0], nums[1], nums[2]);

    for (let i = 1; i <= minNum; i++) {
      if (nums[0] % i === 0 && nums[1] % i === 0 && nums[2] % i === 0) {
        commonDivisors.push(i);
      }
    }
  }

  return commonDivisors.join('\n');
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const nums = input[1].split(' ').map((value) => Number(value));

console.log(solution(n, nums));
