// Solution 1
function solution1(arr, divisor) {
  const result = [];

  for (const num of arr) {
    if (num % divisor === 0) {
      result.push(num);
    }
  }

  if (result.length > 0) {
    result.sort((a, b) => a - b);
  } else {
    result.push(-1);
  }

  return result;
}

// Solution 2
function solution2(arr, divisor) {
  const result = arr.filter((num) => num % divisor === 0);

  if (result.length > 0) {
    result.sort((a, b) => a - b);
  } else {
    result.push(-1);
  }

  return result;
}

// Solution 3
function solution3(arr, divisor) {
  const result = arr.filter((num) => num % divisor === 0);

  result.length > 0 ? result.sort((a, b) => a - b) : result.push(-1);

  return result;
}
