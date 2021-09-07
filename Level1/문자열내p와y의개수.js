function solution(s) {
  let answer = true;
  let pCnt = 0;
  let yCnt = 0;

  s = s.toLowerCase();

  for (let c of s) {
    if (c === 'p') {
      pCnt++;
    } else if (c === 'y') {
      yCnt++;
    }
  }

  if (pCnt !== yCnt) {
    answer = false;
  }

  return answer;
}
