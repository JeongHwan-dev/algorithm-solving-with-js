// reduce() 메서드 이용한 솔루션 1
function solution1(numbers) {
  let answer;
  let total = 0;
  // reduce 메서드를 이용해 숫자 배열에 들어있는 수를 모두 합산
  let sum = numbers.reduce((acc, cur) => acc + cur, 0);

  // 반복문을 이용해 1부터 9까지의 숫자 합 구하기
  for (let i = 1; i <= 9; i++) {
    total += i;
  }

  // 0 ~ 9 까지의 합, 주어진 숫자 배열 요소들의 합 차이 구하기
  answer = total - sum;

  return answer;
}

// includes() 메서드를 이용한 솔루션 2
function solution2(numbers) {
  let sum = 0;

  // 반복문을 이용해 1 부터 9 까지 탐색
  for (let i = 1; i <= 9; i++) {
    // 만약 숫자 배열에 현재 인덱스 값이 없다면
    if (!numbers.includes(i)) {
      // 그 인덱스 값을 합산 변수에 더하기
      sum += i;
    }
  }

  return sum;
}
