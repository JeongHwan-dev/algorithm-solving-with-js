// 솔루션1
function check(arr) {
  const stack = [];

  if (arr[0] === ')' && arr[0] === '}' && arr[0] === ']') {
    return false;
  }

  for (let e of arr) {
    if (e === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    } else if (e === '}' && stack[stack.length - 1] === '{') {
      stack.pop();
    } else if (e === ']' && stack[stack.length - 1] === '[') {
      stack.pop();
    } else {
      stack.push(e);
    }
  }

  return stack.length > 0 ? false : true;
}

function solution1(s) {
  let answer = 0;
  const queue = s.split('');

  for (let i = 0; i < queue.length; i++) {
    const tmp = queue.slice();

    if (check(tmp)) {
      answer++;
    }

    let dequeueNum = queue.shift();
    queue.push(dequeueNum);
  }

  return answer;
}

// 솔루션2
function check(arr) {
  const stack = [];
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let e of arr) {
    const peek = stack[stack.length - 1];

    if (brackets[peek] === e) {
      stack.pop();
    } else {
      stack.push(e);
    }
  }

  return stack.length > 0 ? false : true;
}

function solution(s) {
  let answer = 0;
  const queue = s.split('');

  for (let i = 0; i < queue.length; i++) {
    const tmp = queue.slice();

    if (check(tmp)) {
      answer++;
    }

    let dequeue = queue.shift();
    queue.push(dequeue);
  }

  return answer;
}
