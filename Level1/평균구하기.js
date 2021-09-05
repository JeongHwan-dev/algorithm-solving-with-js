function solution(arr) {
  let answer = 0;
  let sum = 0;

  for (let n of arr) {
    sum += n;
  }

  answer = sum / arr.length;

  return answer;
}
