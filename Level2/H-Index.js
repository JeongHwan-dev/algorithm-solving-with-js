function solution(citations) {
  // 초기 인덱스 0으로 설정
  let idx = 0;

  // 논문 인용 배열을 내림차순으로 정렬
  citations.sort((a, b) => b - a);

  // 논문 인용 배열 길이 만큼 반복
  while (idx <= citations.length) {
    // 논문 인용 횟수가 현재 인용 횟수보다 작거나 같다면
    if (idx + 1 <= citations[idx]) {
      // 인덱스를 1씩 증가
      idx++;
    }
    // 만약 현재 인용 횟수가 논문 인용 횟수보다 크다면
    else {
      // 반복문 종료
      break;
    }
  }

  return idx;
}
