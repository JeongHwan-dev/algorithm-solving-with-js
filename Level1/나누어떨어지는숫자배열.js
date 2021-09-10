function solution(arr, divisor) {
  let answer = [];

  for (let n of arr) {
    if (n % divisor === 0) {
      answer.push(n);
    }
  }

  if (answer.length > 0) {
    answer.sort((a, b) => a - b);
  } else {
    answer.push(-1);
  }

  return answer;
}

function solution(arr, divisor) {
  let answer = arr.filter((n) => n % divisor === 0);

  if (answer.length > 0) {
    answer.sort((a, b) => a - b);
  } else {
    answer.push(-1);
  }

  return answer;
}
