function solution(s) {
  const array = s.split('');
  const len = array.length;
  const parts = [];

  for (let count = 1; count <= len; count++) {
    for (let i = 0; i <= len - count; i++) {
      const str = array.slice(i, i + count).join('');

      parts.push(str);
    }
  }

  const set = new Set(parts);

  return set.size;
}

const fs = require('fs');
const s = fs.readFileSync('/dev/stdin').toString().trim();

console.log(solution(s));
