function solution(n) {
  let answer = n;
  // 소수이면 1, 아니면 0으로 체크하는 배열 생성
  // 초기값은 1로 초기화
  let primeArr = new Array(n).fill(1);

  // 1은 소수가 아니므로 0 할당
  primeArr[0] = 0;

  // 2부터 제곱근으로 순회
  for (let i = 2; i * i <= n; i++) {
    // 2의 배수들은 소수가 아니므로 체크 배열의 해당 값을 0으로 변경
    for (let j = i * i; j <= n; j += i) {
      primeArr[j - 1] = 0;
    }
  }

  // filter() 메서드를 이용해 1로 표기한 수들만 종합된 배열을 생성하고 그 배열 길이를 리턴
  answer = primeArr.filter((e) => e === 1).length;

  return answer;
}
