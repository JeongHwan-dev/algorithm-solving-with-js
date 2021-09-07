function solution1(n) {
  let answer = '';

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      answer += '수';
    } else {
      answer += '박';
    }
  }

  return answer;
}

function solution2(n) {
  const repeatCnt = Math.floor(n / 2);
  let answer = '수박'.repeat(repeatCnt);

  if (n % 2) {
    answer += '수';
  }

  return answer;
}
