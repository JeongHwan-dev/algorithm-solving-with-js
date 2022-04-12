// Solution 1
function solution(n, m, nums) {
  let numberOfCases = 0;
  let leftPoint = 0;
  let rightPoint = n - 1;

  nums.sort((a, b) => a - b);

  while (leftPoint < rightPoint) {
    const sum = nums[leftPoint] + nums[rightPoint];

    if (sum === m) {
      numberOfCases += 1;
      leftPoint += 1;
      rightPoint -= 1;
    } else if (sum < m) {
      leftPoint += 1;
    } else {
      rightPoint -= 1;
    }
  }

  return numberOfCases;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const m = parseInt(input[1]);
const nums = input[2].split(' ').map((value) => parseInt(value));

console.log(solution(n, m, nums));
