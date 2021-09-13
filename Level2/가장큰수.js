function solution(numbers) {
  let answer = '';

  answer = numbers
    .map((n) => String(n)) // map() 메서드를 이용해 배열의 모든 수들을 문자열로 변경
    .sort((a, b) => b + a - (a + b)) // 문자열 형태로 합쳐진 상태를 기준으로 내림차순으로 정렬
    .join(''); // join() 메서드를 통해 배열의 숫자를 모두 합치기

  // 결과값의 맨 앞자리가 0이라면 0으로 리턴
  // 그렇지 않다면 기존 결과값 리턴
  return answer[0] === '0' ? '0' : answer;
}
