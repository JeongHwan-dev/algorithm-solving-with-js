function solution(n) {
  let answer;
  let arr = n
    .toString()
    .split('')
    .map((num) => Number(num));

  arr.sort((a, b) => b - a);
  answer = Number(arr.join(''));

  return answer;
}
