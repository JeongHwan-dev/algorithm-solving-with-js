// 솔루션1
function checkBrackets(brackets) {
  const stack = [];

  if (brackets[0] === ')' && brackets[0] === '}' && brackets[0] === ']') {
    return false;
  }

  for (const e of brackets) {
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
  const queue = s.split('');
  let rightBracketsCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (checkBrackets(queue)) {
      rightBracketsCount++;
    }

    const firstElement = queue.shift();

    queue.push(firstElement);
  }

  return rightBracketsCount;
}

// 솔루션2
function checkBrackets(brackets) {
  const bracketObj = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const stack = [];

  for (const bracket of brackets) {
    const lastElement = stack[stack.length - 1];

    bracketObj[lastElement] === bracket ? stack.pop() : stack.push(bracket);
  }

  return stack.length > 0 ? false : true;
}

function solution2(s) {
  const queue = s.split('');
  let rightBracketsCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (checkBrackets(queue)) {
      rightBracketsCount++;
    }

    const firstElement = queue.shift();

    queue.push(firstElement);
  }

  return rightBracketsCount;
}
