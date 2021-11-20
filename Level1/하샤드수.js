// Solution 1
function solution1(x) {
  const arr = x
    .toString()
    .split('')
    .map((n) => Number(n));
  let sum = 0;

  for (let n of arr) {
    sum += n;
  }

  const isHarshadNumber = x % sum === 0 ? true : false;

  return isHarshadNumber;
}

// Solution 2
function solution2(x) {
  const sum = x
    .toString()
    .split('')
    .map((n) => parseInt(n))
    .reduce((prev, curr) => prev + curr, 0);
  const isHarshadNumber = x % sum === 0 ? true : false;

  return isHarshadNumber;
}

// Solution 3
function solution3(x) {
  let num = x;
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  const isHarshadNumber = x % sum === 0 ? true : false;

  return isHarshadNumber;
}
