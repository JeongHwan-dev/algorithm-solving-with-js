// Solution 1
function solution(n, x, records) {
  if (Math.max(...records) === 0) {
    return 'SAD';
  }

  let numberOfVisitors = records.slice(0, x).reduce((acc, cur) => acc + cur, 0);
  let maxNumberOfVisitors = numberOfVisitors;
  let count = 1;

  for (let i = x; i < n; i++) {
    numberOfVisitors += records[i];
    numberOfVisitors -= records[i - x];

    if (numberOfVisitors > maxNumberOfVisitors) {
      maxNumberOfVisitors = numberOfVisitors;
      count = 1;
    } else if (numberOfVisitors === maxNumberOfVisitors) {
      count += 1;
    }
  }

  return `${maxNumberOfVisitors}\n${count}`;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, x] = input[0].split(' ').map((value) => parseInt(value));
const records = input[1].split(' ').map((value) => parseInt(value));

console.log(solution(n, x, records));
