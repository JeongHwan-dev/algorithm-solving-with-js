// Solution 1
function solution(n, c, nums) {
  const numMap = new Map();

  for (const num of nums) {
    numMap.has(num) ? numMap.set(num, numMap.get(num) + 1) : numMap.set(num, 1);
  }

  const numsWithCount = nums.map((num) => [
    nums.indexOf(num),
    num,
    numMap.get(num),
  ]);

  numsWithCount.sort(([aIndex, aNum, aCount], [bIndex, bNum, bCount]) =>
    aCount === bCount ? aIndex - bIndex : bCount - aCount
  );

  const sortedNums = numsWithCount.map(([index, num, count]) => num);

  return sortedNums.join(' ');
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, c] = input[0].split(' ').map((value) => parseInt(value));
const nums = input[1].split(' ').map((value) => parseInt(value));

console.log(solution(n, c, nums));
