// Solution 1
function solution(n) {
  let boxs = Array.from({ length: n }, (_, index) => index + 1);

  while (boxs.length > 1) {
    for (let i = 0; i < boxs.length; i += 2) {
      boxs[i] = 0;
    }

    boxs = boxs.filter((box) => box !== 0);
  }

  return boxs[0];
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

console.log(solution(n));
