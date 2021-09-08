function solution1(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      answer.push(arr[i]);
    } else if (arr[i] !== arr[i - 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

function solution2(arr) {
  return arr.filter((val, idx) => val !== arr[idx + 1]);
}
