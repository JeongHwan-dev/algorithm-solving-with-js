function solution(n) {
  let answer = 0;
  const queue = [];
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    queue.push(i);
    sum += i;

    while (sum > n) {
      sum -= queue.shift();
    }

    if (sum === n) {
      answer++;
    }
  }

  return answer;
}
