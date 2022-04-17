// Solution 1
function solution(n, k, temperatures) {
  const sumArray = [];
  let sum = temperatures.slice(0, k).reduce((acc, cur) => acc + cur, 0);

  sumArray.push(sum);

  for (let i = 1; i <= n - k; i++) {
    sum -= temperatures[i - 1];
    sum += temperatures[i + k - 1];

    sumArray.push(sum);
  }

  return Math.max(...sumArray);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map((value) => Number(value));
const temperatures = input[1].split(' ').map((value) => Number(value));

console.log(solution(n, k, temperatures));
