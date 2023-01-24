// Solution 1
function solution(n) {
  return n
    .toString()
    .split('')
    .reduce((acc, cur) => acc + parseInt(cur), 0);
}

// Solution 2
function solution(n) {
  let sum = 0;
  let restNum = n;

  while (restNum > 0) {
    sum += restNum % 10;
    restNum = parseInt(restNum / 10);
  }

  return sum;
}
