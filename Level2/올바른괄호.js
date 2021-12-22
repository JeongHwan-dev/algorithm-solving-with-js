// Solution 1
function solution1(s) {
  const stack = [];

  if (s.length % 2 !== 0 || s[0] === ')' || s[s.length - 1] === '(') {
    return false;
  }

  for (const bracket of s) {
    bracket === ')' && stack[stack.length - 1] === '('
      ? stack.pop()
      : stack.push(bracket);
  }

  return stack.length === 0 ? true : false;
}

// Solution 2
function solution2(s) {
  const stack = [];

  for (const bracket of s) {
    if (bracket === '(') {
      stack.push(bracket);
    } else {
      if (stack.length === 0) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
}

// Solution 3
function solution3(s) {
  let count = 0;

  for (const bracket of s) {
    if (bracket === '(') {
      count++;
    } else {
      if (count === 0) {
        return false;
      }

      count--;
    }
  }

  return count === 0 ? true : false;
}
