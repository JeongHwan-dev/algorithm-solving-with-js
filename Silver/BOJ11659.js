// Solution 1
function solution(arr, sections) {
  const result = [];
  const dp = [0];

  for (let i = 0; i < arr.length; i++) {
    dp[i + 1] = dp[i] + arr[i];
  }

  for (const section of sections) {
    const [start, end] = section;
    const sum = dp[end] - dp[start - 1];

    result.push(sum);
  }

  return result.join('\n');
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map((value) => parseInt(value));
const arr = input[1].split(' ').map((value) => parseInt(value));
const sections = [];

for (let i = 0; i < m; i++) {
  sections.push(input[2 + i].split(' ').map((value) => parseInt(value)));
}

console.log(solution(arr, sections));
