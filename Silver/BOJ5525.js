// Solution 1
function solution1(n, m, s) {
  let pCount = 0;
  let count = 0;
  let index = 1;

  while (index < m - 1) {
    if (s[index - 1] === 'I' && s[index] === 'O' && s[index + 1] === 'I') {
      count += 1;
      if (count === n) {
        count -= 1;
        pCount += 1;
      }

      index += 1;
    } else {
      count = 0;
    }

    index += 1;
  }

  return pCount;
}

// Solution 2
function solution2(n, s) {
  const len = 2 * n + 1;
  let p = '';
  let pCount = 0;

  for (let i = 1; i <= len; i++) {
    i % 2 !== 0 ? (p += 'I') : (p += 'O');
  }

  for (let i = 0; i <= s.length - len; i++) {
    if (s.substring(i, i + len) === p) {
      pCount += 1;
    }
  }

  return pCount;
}

// Solution 3
function solution3(n, s) {
  const len = 2 * n + 1;
  let p = '';
  let pCount = 0;
  let index = 0;

  for (let i = 1; i <= len; i++) {
    i % 2 !== 0 ? (p += 'I') : (p += 'O');
  }

  while (true) {
    const targetIndex = s.indexOf(p, index);

    if (targetIndex === -1) {
      break;
    } else {
      pCount += 1;
      index = targetIndex + 1;
    }
  }

  return pCount;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const m = parseInt(input[1]);
const s = input[2];

console.log(solution1(n, m, s));

console.log(solution2(n, s));

console.log(solution3(n, s));
