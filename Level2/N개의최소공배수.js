function GCD(a, b) {
  while (b > 0) {
    let tmp = b;

    b = a % b;
    a = tmp;
  }

  return a;
}

function LCM(a, b) {
  return (a * b) / GCD(a, b);
}

function solution(arr) {
  let answer = 1;

  for (let i = 0; i < arr.length; i++) {
    answer = LCM(answer, arr[i]);
  }

  return answer;
}
