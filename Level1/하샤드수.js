function solution1(x) {
  let answer = true;
  const arr = x
    .toString()
    .split('')
    .map((n) => Number(n));
  let sum = 0;

  for (let n of arr) {
    sum += n;
  }

  if (x % sum !== 0) {
    answer = false;
  }

  return answer;
}

function solution2(x) {
  let answer = true;
  const sum = x
    .toString()
    .split('')
    .map((n) => Number(n))
    .reduce((prev, curr) => prev + curr, 0);

  if (x % sum !== 0) {
    answer = false;
  }

  return answer;
}

function solution3(x) {
  let answer = true;
  let n = x;
  let sum = 0;

  while (n !== 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  if (x % sum !== 0) {
    answer = false;
  }

  return answer;
}
