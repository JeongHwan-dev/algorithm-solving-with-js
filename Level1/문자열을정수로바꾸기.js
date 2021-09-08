function solution1(s) {
  let answer = 0;

  if (isNaN(s.slice(0, 1))) {
    let sign = s.slice(0, 1);
    let num = Number(s.slice(1));

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

function solution2(s) {
  return Number(s);
}

function solution3(s) {
  return parseInt(s);
}
