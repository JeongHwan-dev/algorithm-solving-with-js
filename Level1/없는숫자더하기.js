// Solution 1
function solution1(numbers) {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  let total = 0;

  for (let i = 1; i <= 9; i++) {
    total += i;
  }

  const result = total - sum;

  return result;
}

// Solution 2
function solution2(numbers) {
  const numbersSum = numbers.reduce((acc, cur) => acc + cur, 0);
  const result = 45 - numbersSum;

  return result;
}

// Solution 3
function solution3(numbers) {
  let sum = 0;

  for (let i = 1; i <= 9; i++) {
    if (!numbers.includes(i)) {
      sum += i;
    }
  }

  return sum;
}
