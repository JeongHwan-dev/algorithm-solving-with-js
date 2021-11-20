// Solution 1
function solution1(s) {
  let answer = 0;

  if (isNaN(s.slice(0, 1))) {
    const sign = s.slice(0, 1);
    const num = Number(s.slice(1));

    if (sign === '-') {
      answer = 0 - num;
    } else {
      answer = num;
    }
  } else {
    answer = Number(s);
  }

  return answer;
}

// Solution 2
function solution2(s) {
  return parseInt(s);
}

// Solution 3
function solution3(s) {
  return Number(s);
}
