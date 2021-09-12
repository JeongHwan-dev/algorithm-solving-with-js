// for 문을 사용한 솔루션 1
function solution1(array, commands) {
  let answer = [];

  // for문을 사용해 명령문 탐색
  for (let i = 0; i < commands.length; i++) {
    // 시작점, 끝점, 타겟 인덱스 변수에 값 할당
    const start = commands[i][0] - 1;
    const end = commands[i][1];
    const idx = commands[i][2] - 1;

    // 요구하는 범위만큼 잘라온 후 임시 배열에 저장
    let tmp = array.slice(start, end);

    // 배열 오름차순으로 정렬
    tmp.sort((a, b) => a - b);

    // 타켓 값 불러온 후 결과 배열에 push
    answer.push(tmp[idx]);
  }

  return answer;
}

// map()을 사용한 솔루션 2
function solution2(array, commands) {
  // map() 메서드를 사용해 명령문 탐색하고 새로운 배열 만들기
  let answer = commands.map((command) => {
    // 시작점, 끝점, 타겟 인덱스 변수에 값 할당
    const start = command[0] - 1;
    const end = command[1];
    const idx = command[2] - 1;

    // 요구하는 범위만큼 잘라온 후 오름차순으로 배열해서 임시 배열에 저장
    let tmp = array.slice(start, end).sort((a, b) => a - b);

    // 타겟 값을 리턴
    return tmp[idx];
  });

  return answer;
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution1(array, commands));
console.log(solution2(array, commands));
