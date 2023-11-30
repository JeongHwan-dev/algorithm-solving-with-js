// Solution 1
function solution1(n) {
  let num = 1;
  let sum = 1;

  while (n >= sum) {
    num += 1;
    sum *= num;
  }

  return num - 1;
}

// Solution 2
const MAX_N = 11;

function factorial(num) {
  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

function solution2(n) {
  for (let i = 1; i <= MAX_N; i++) {
    if (factorial(i) > n) {
      return i - 1;
    }
  }
}
