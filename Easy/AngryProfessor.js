// Solution 1
function angryProfessor(k, a) {
  const totalStudentCount = a.length;
  const tardyStudentCount = a.filter((time) => time > 0).length;
  const attendedStudentCount = totalStudentCount - tardyStudentCount;

  return attendedStudentCount < k ? 'YES' : 'NO';
}
