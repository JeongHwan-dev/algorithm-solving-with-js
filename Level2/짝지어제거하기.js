function solution(s) {
  const stack = [];

  if (s.length % 2 !== 0) {
    return 0;
  }

  for (let e of s) {
    if (stack[stack.length - 1] === e) {
      stack.pop();
    } else {
      stack.push(e);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
