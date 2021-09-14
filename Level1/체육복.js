function solution(n, lost, reserve) {
  let answer = 0;
  // 학생들의 체육복 수 1로 초기화
  let student = Array.from({ length: n }, () => 1);

  // 체육복을 도난 당한 학생들의 체육복 수를 0으로 할당
  for (let i of lost) {
    student[i - 1] = 0;
  }

  // 여분 체육복을 갖고 있는 학생들의 체육복 수를 기존 수에서 +1
  for (let i of reserve) {
    student[i - 1] += 1;
  }

  // 반복문을 통해 체육복이 없는 학생들을 탐색
  for (let i = 0; i < student.length; i++) {
    // 만약 체육복이 없고 앞 번호 학생이 체육복 여벌을 갖고 있다면
    if (student[i] === 0 && student[i - 1] === 2) {
      // 여벌을 갖고 있는 학생의 체육복 수를 하나 줄이고
      student[i - 1]--;
      // 체육복을 갖고 있지 않던 학생의 체육복 수를 하나 늘린다.
      student[i]++;
    }
    // 만약 체육복이 없고 뒷 번호 학생이 체육복 여벌을 갖고 있다면
    else if (student[i] === 0 && student[i + 1] === 2) {
      // 여벌을 갖고 있는 학생의 체육복 수를 하나 줄이고
      student[i + 1]--;
      // 체육복을 갖고 있지 않던 학생의 체육복 수를 하나 늘린다.
      student[i]++;
    }
  }

  // 체육복을 갖고 있는 사람을 카운트하는 여러가지 방법

  // 1. for문 이용해서 카운트
  for (let s of student) {
    if (s > 0) {
      answer++;
    }
  }

  // 2. filter() 메서드를 이용해서 카운트
  answer = student.filter((s) => s > 0).length;

  // 3. reduce() 메서드를 이용해서 카운트
  answer = student.reduce((cnt, s) => cnt + (s > 0), 0);

  return answer;
}
