function solution(s) {
  let answer = true;
  const arr = s.split('');
  const stack = [];

  if (arr.length % 2 !== 0 || arr[0] === ')' || arr[arr.length - 1] === '(') {
    return false;
  }

  for (let e of arr) {
    if (e === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    } else {
      stack.push(e);
    }
  }

  if (stack.length > 0) {
    answer = false;
  }

  return answer;
}
