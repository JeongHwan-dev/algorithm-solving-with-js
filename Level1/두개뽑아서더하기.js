// includes() 메서드를 활용한 솔루션 1
function solution(numbers) {
  let answer = [];

  // 반복문을 통해 두 개씩 짝짓기
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      // 선택된 두 개의 수를 더해서 sum 변수에 할당
      let sum = numbers[i] + numbers[j];

      // 만약 결과 배열에 sum 값을 포함하고 있지 않다면
      if (!answer.includes(sum)) {
        // sum 값을 결과 배열에 추가
        answer.push(sum);
      }
    }
  }

  // 결과 배열을 오름차순으로 초기화
  answer.sort((a, b) => a - b);

  return answer;
}

// Set 객체를 활용한 솔루션 2
function solution2(numbers) {
  let answer = [];
  const tmp = [];

  // 반복문을 통해 두 개씩 짝짓기
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      // 선택된 두 개의 수를 더해서 tmp 배열에 추가
      tmp.push(numbers[i] + numbers[j]);
    }
  }

  // Set 객체를 통해 중복 제거 후 다시 배열로 변경
  answer = [...new Set(tmp)];
  // 결과 배열을 오름차순으로 초기화
  answer.sort((a, b) => a - b);

  return answer;
}
