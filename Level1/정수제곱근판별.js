function solution1(n) {
  let answer = 0;

  if (Number.isInteger(Math.sqrt(n))) {
    answer = Math.pow(Math.sqrt(n) + 1, 2);
  } else {
    answer = -1;
  }

  return answer;
}

function solution2(n) {
  const sqrtN = Math.sqrt(n);
  const answer = Number.isInteger(sqrtN) ? Math.pow(sqrtN + 1, 2) : -1;

  return answer;
}
