// Solution 1
function solution1(num) {
  let result = '';

  if (num % 2 === 0) {
    result = 'Even';
  } else {
    result = 'Odd';
  }

  return result;
}

// Solution 2
function solution2(num) {
  const result = num % 2 === 0 ? 'Even' : 'Odd';

  return result;
}
