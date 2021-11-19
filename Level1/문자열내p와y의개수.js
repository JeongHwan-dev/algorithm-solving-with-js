// Solution 1
function solution1(s) {
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

// Solution 2
function solution2(s) {
  const splittedS = s.split('');
  const pCount = splittedS.filter(
    (alphabet) => alphabet === 'p' || alphabet === 'P'
  ).length;
  const yCount = splittedS.filter(
    (alphabet) => alphabet === 'y' || alphabet === 'Y'
  ).length;
  const answer = pCount === yCount ? true : false;

  return answer;
}

// Solution 3
function solution3(s) {
  const answer =
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length;

  return answer;
}
