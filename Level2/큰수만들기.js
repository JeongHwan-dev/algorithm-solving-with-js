// Solution 1
function solution1(number, k) {
  const splittedNumber = number.split('');
  const stack = [];

  for (const n of splittedNumber) {
    while (k > 0 && n > stack[stack.length - 1]) {
      stack.pop();
      k--;
    }

    stack.push(n);
  }

  if (k > 0) {
    stack.splice(stack.length - k, k);
  }

  const maxNumber = String(stack.join(''));

  return maxNumber;
}

// Solution 2
function solution2(number, k) {
  const stack = [];
  let removeCount = 0;

  for (const item of number) {
    while (removeCount < k && stack[stack.length - 1] < item) {
      stack.pop();
      removeCount++;
    }

    stack.push(item);
  }

  while (removeCount < k) {
    stack.pop();
    removeCount++;
  }

  const maxNumber = stack.join('');

  return maxNumber;
}
