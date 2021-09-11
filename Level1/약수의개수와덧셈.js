function countDivisor(n) {
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      cnt++;
    }
  }

  return cnt;
}

function solution1(left, right) {
  let answer = 0;

  for (let n = left; n <= right; n++) {
    if (countDivisor(n) % 2 === 0) {
      answer += n;
    } else {
      answer -= n;
    }
  }

  return answer;
}

function solution2(left, right) {
  let answer = 0;

  for (let n = left; n <= right; n++) {
    if (Number.isInteger(Math.sqrt(n))) {
      answer -= n;
    } else {
      answer += n;
    }
  }

  return answer;
}
