// Solution 1
function solution1(n, lost, reserve) {
  const students = Array.from({ length: n }, () => 1);

  lost.forEach((num) => {
    students[num - 1] = 0;
  });

  reserve.forEach((num) => {
    students[num - 1] += 1;
  });

  for (let i = 0; i < students.length; i++) {
    if (students[i] === 0 && students[i - 1] === 2) {
      students[i - 1]--;
      students[i]++;
    } else if (students[i] === 0 && students[i + 1] === 2) {
      students[i + 1]--;
      students[i]++;
    }
  }

  const maxStudentCount = students.filter((student) => student > 0).length;

  return maxStudentCount;
}
