// for 문을 이용한 솔루션 1
function solution1(a, b) {
  let answer = 0;

  // 반복문을 통해 동일한 인덱스의 a 배열, b 배열의 요소 곱을 누적해서 더하기
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}

// reduce() 메서드를 이용한 솔루션 2
function solution2(a, b) {
  // reduce() 메서드를 이용해 동일한 인덱스의 a 배열, b 배열의 요소 곱을 누적해서 더하기
  let answer = a.reduce((acc, cur, idx) => {
    return acc + cur * b[idx];
  }, 0);

  return answer;
}

// reduce() 메서드를 이용한 솔루션 3
function solution3(a, b) {
  // reduce() 메서드를 이용해 동일한 인덱스의 a 배열, b 배열의 요소 곱을 누적해서 더하기
  let answer = a.reduce((acc, _, idx) => acc + a[idx] * b[idx], 0);

  return answer;
}
