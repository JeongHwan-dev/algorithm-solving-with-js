// Solution 1
function countDivisor(num) {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  return count;
}

function solution1(left, right) {
  let result = 0;

  for (let num = left; num <= right; num++) {
    if (countDivisor(num) % 2 === 0) {
      result += num;
    } else {
      result -= num;
    }
  }

  return result;
}

// Solution 2
function solution2(left, right) {
  let result = 0;

  for (let num = left; num <= right; num++) {
    if (Number.isInteger(Math.sqrt(num))) {
      result -= n;
    } else {
      result += n;
    }
  }

  return result;
}

// Solution 3
function solution3(left, right) {
  let result = 0;

  for (let num = left; num <= right; num++) {
    result = Number.isInteger(Math.sqrt(num)) ? result - num : result + num;
  }

  return result;
}
