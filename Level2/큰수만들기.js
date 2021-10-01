function solution(number, k) {
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
