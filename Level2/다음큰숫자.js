function countOne(num) {
  const bin = num.toString(2).split('');
  const cnt = bin.filter((e) => e === '1').length;

  return cnt;
}

function solution(n) {
  let answer = 0;
  const targetCnt = countOne(n);

  while (true) {
    if (countOne(++n) === targetCnt) {
      answer = n;
      break;
    }
  }

  return answer;
}
