// Solution 1
function solution(n, nums) {
  let maxNum = 0;

  function backTracking(num) {
    if (num > n) {
      return;
    }

    maxNum = Math.max(maxNum, num);

    for (const element of nums) {
      num = num * 10 + element;
      backTracking(num);
      num = (num - element) / 10;
    }
  }

  backTracking(0);

  return maxNum;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map((value) => parseInt(value));
const nums = input[1].split(' ').map((value) => parseInt(value));

console.log(solution(n, nums));
