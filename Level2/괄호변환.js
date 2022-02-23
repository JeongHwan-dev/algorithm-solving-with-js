// Solution 1
function checkBracket(p) {
  const stack = [];

  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') {
      stack.push('(');
    } else {
      if (stack.length === 0) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
}

function solution(p) {
  let result = '';
  let openBracketCount = 0;
  let closeBracketCount = 0;

  if (p === '') {
    return '';
  }

  for (let i = 0; i < p.length; i++) {
    p[i] === '(' ? (openBracketCount += 1) : (closeBracketCount += 1);

    if (openBracketCount === closeBracketCount) {
      if (checkBracket(p.slice(0, i + 1))) {
        result = p.slice(0, i + 1) + solution(p.slice(i + 1));

        return result;
      } else {
        result = '(' + solution(p.slice(i + 1)) + ')';

        for (let j = 1; j < i; j++) {
          p[j] === '(' ? (result += ')') : (result += '(');
        }

        return result;
      }
    }
  }

  return answer;
}
