// Solution 1
function solution1(nums) {
  let maxNum = Number.MIN_SAFE_INTEGER;
  let minNum = Number.MAX_SAFE_INTEGER;

  nums.forEach((num) => {
    if (maxNum < num) {
      maxNum = num;
    }

    if (minNum > num) {
      minNum = num;
    }
  });

  return `${minNum} ${maxNum}`;
}

// Solution 2
function solution2(nums) {
  return `${Math.min(...nums)} ${Math.max(...nums)}`;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
const arr = input.slice(1);

for (let i = 0; i < t; i++) {
  const n = arr.shift();
  const nums = arr
    .shift()
    .split(' ')
    .map((value) => Number(value));

  console.log(solution1(nums));
}

for (let i = 0; i < t; i++) {
  const n = arr.shift();
  const nums = arr
    .shift()
    .split(' ')
    .map((value) => Number(value));

  console.log(solution2(nums));
}
