// Solution 1
function solution(n, m, nums) {
  let numberOfCases = 0;

  for (let i = 0; i < n; i++) {
    let index = i;
    let sum = nums[i];

    while (sum < m && index < n - 1) {
      index += 1;
      sum += nums[index];
    }

    if (sum === m) {
      numberOfCases += 1;
    }
  }

  return numberOfCases;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0].split(' ')[0]);
const m = Number(input[0].split(' ')[1]);
const nums = input[1].split(' ').map((num) => Number(num));

console.log(solution(n, m, nums));
