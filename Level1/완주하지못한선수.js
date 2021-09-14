function solution1(participant, completion) {
  let answer = '';
  // 카운트에 이용할 Map 객체 생성
  let map = new Map();

  // 참가자 배열을 돌면서 Map 객체 메서드들을 이용해 카운트
  for (let name of participant) {
    if (map.has(name)) {
      map.set(name, map.get(name) + 1);
    } else {
      map.set(name, 1);
    }
  }

  // 완주자 배열을 돌면서 Map 객체를 이용해 카운트 한 값을 하나씩 감소
  for (let name of completion) {
    map.set(name, map.get(name) - 1);
  }

  // Map 객체의 value 값이 아직도 0 보다 큰 값을 갖고 있는 key 값을 찾기
  for (let name of participant) {
    if (map.get(name) > 0) {
      answer = name;
      break;
    }
  }

  return answer;
}

function solution2(participant, completion) {
  let answer = '';

  // 참가자 배열 유니코드 값 기준으로 정렬
  participant.sort();
  // 완주자 배열 유니코드 값 기준으로 정렬
  completion.sort();

  // 정렬된 두 배열을 비교하면서 동일 하지 않은 값 찾기
  for (let i in participant) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }

  return answer;
}
