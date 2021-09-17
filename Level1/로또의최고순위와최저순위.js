// 순위를 반환하는 함수
function getRank(count) {
  let rank;

  if (count === 6) {
    rank = 1;
  } else if (count === 5) {
    rank = 2;
  } else if (count === 4) {
    rank = 3;
  } else if (count === 3) {
    rank = 4;
  } else if (count === 2) {
    rank = 5;
  } else {
    rank = 6;
  }

  return rank;
}

// 순위를 반환하는 함수를 이용한 솔루션1
function solution1(lottos, win_nums) {
  // 0이 없는 로또 배열 생성
  const noZeroLottos = lottos.filter((num) => num !== 0);
  // 번호가 일치하는 수
  const sameCnt = noZeroLottos.filter((num) => win_nums.includes(num)).length;
  // 번호가 0인 수
  const zeroCnt = lottos.length - noZeroLottos.length;
  // getRank() 함수를 이용해 순위 최대, 최소 순위 반환
  const answer = [getRank(sameCnt + zeroCnt), getRank(sameCnt)];

  return answer;
}

// filter() 메서드와 삼항 조건 연산자를 이용한 솔루션2
function solution2(lottos, win_nums) {
  const answer = [];
  // 최소로 번호가 일치하는 수
  const min = lottos.filter((n) => win_nums.includes(n)).length;
  // 최대로 번호가 일치하는 수
  const max = lottos.filter((n) => n === 0).length + min;

  // 일치하는 수에 따른 순위 결과 배열에 push
  max > 1 ? answer.push(7 - max) : answer.push(6);
  min > 1 ? answer.push(7 - min) : answer.push(6);

  return answer;
}
