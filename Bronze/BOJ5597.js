// Solution 1
function solution(studentNums) {
  const check = Array.from({ length: 30 }, () => false);
  const unsubmissionStudentNums = [];

  studentNums.forEach((studentNum) => (check[studentNum - 1] = true));

  for (let i = 0; i < 30; i++) {
    if (!check[i]) {
      unsubmissionStudentNums.push(i + 1);
    }
  }

  return unsubmissionStudentNums.join('\n');
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const studentNums = input.map((value) => Number(value));

console.log(solution(studentNums));
