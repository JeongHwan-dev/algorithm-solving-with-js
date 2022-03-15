// Solution 1
function solution(a, b, c, m) {
  const TOTAL_HOURS = 24;
  const works = Array.from({ length: TOTAL_HOURS }, () => 0);
  let totalFatigue = 0;

  for (let i = 0; i < TOTAL_HOURS; i++) {
    if (totalFatigue + a <= m) {
      totalFatigue += a;
      works[i] = b;
    } else {
      totalFatigue - c > 0 ? (totalFatigue -= c) : (totalFatigue = 0);
    }
  }

  const totalWork = works.reduce((acc, cur) => acc + cur, 0);

  return totalWork;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const [a, b, c, m] = input.split(' ').map((value) => parseInt(value));

console.log(solution(a, b, c, m));
