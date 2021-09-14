// for문을 이용한 솔루션 1
function solution1(absolutes, signs) {
  // 합계를 0으로 초기화
  let sum = 0;

  // 정수 배열을 순회하면서 부호 확인 후 더하기 또는 빼기 결정
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      sum += absolutes[i];
    } else {
      sum -= absolutes[i];
    }
  }

  return sum;
}

// reduce() 메서드를 이용한 솔루션 2
function solution2(absolutes, signs) {
  // 정수 배열을 순회하면서 부호 확인 후 더하기 또는 빼기 결정
  let sum = absolutes.reduce((acc, val, idx) => {
    if (signs[idx++]) {
      return acc + val;
    } else {
      return acc - val;
    }
  }, 0);

  return sum;
}

// reduce() 메서드를 이용한 솔루션 3
function solution3(absolutes, signs) {
  // 정수 배열을 순회하면서 부호 확인 후 더하기 또는 빼기 결정
  let sum = absolutes.reduce(
    (acc, val, idx) => acc + val * (signs[idx] ? 1 : -1),
    0
  );

  return sum;
}
