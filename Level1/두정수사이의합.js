// Solution 1
function solution1(a, b) {
  const minNum = Math.min(a, b);
  const maxNum = Math.max(a, b);
  let sum = 0;

  for (let num = minNum; num <= maxNum; num++) {
    sum += num;
  }

  return sum;
}

// Solution 2
function getSumFromOneToN(num) {
  const result = (num * (num + 1)) / 2;

  return result;
}

function solution(a, b) {
  let result;

  if (a === b) {
    result = a;
  } else if (a > b) {
    result = getSumFromOneToN(a) - getSumFromOneToN(b - 1);
  } else {
    result = getSumFromOneToN(b) - getSumFromOneToN(a - 1);
  }

  return result;
}
