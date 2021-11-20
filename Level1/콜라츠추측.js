// Solution 1
function solution1(num) {
  let answer = 0;
  let cnt = 0;

  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }

    cnt++;

    if (cnt === 500) {
      return -1;
    }
  }

  answer = cnt;

  return answer;
}

// Solution 2
function solution2(num) {
  let count = 0;

  while (num !== 1) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    count++;

    if (count === 500) {
      count = -1;
      break;
    }
  }

  return count;
}
