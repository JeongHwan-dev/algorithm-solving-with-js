// Solution 1
function solution1(n) {
  let answer = 0;

  while (n !== 0) {
    answer += n % 10;
    n = Math.floor(n / 10);
  }

  return answer;
}

// Solution 2
function solution2(n) {
  const sum = String(n)
    .split('')
    .map((num) => parseInt(num))
    .reduce((acc, cur) => acc + cur, 0);

  return sum;
}

// Solution 3
function solution3(n) {
  const sum = String(n)
    .split('')
    .reduce((acc, cur) => acc + parseInt(cur), 0);

  return sum;
}
