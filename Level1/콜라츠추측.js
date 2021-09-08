function solution(num) {
  let answer = 0;
  let cnt = 0;

  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }

    cnt++;

    if (cnt === 500) {
      return -1;
    }
  }

  answer = cnt;

  return answer;
}
