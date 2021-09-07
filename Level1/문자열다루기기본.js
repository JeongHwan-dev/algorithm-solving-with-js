function solution(s) {
  let answer = true;
  let arr = s.split('');

  if (!(arr.length === 4 || arr.length === 6)) {
    answer = false;
  }

  for (let e of arr) {
    if (isNaN(e)) {
      answer = false;
    }
  }

  return answer;
}
