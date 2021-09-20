// sort() 메서드를 이용한 솔루션1
function solution1(s) {
  let answer = '';
  const arr = s.split(' ').map((num) => Number(num));

  arr.sort((a, b) => a - b);
  answer = `${arr[0]} ${arr[arr.length - 1]}`;

  return answer;
}

// Math.min, max 메서드를 이용한 솔루션2
function solution2(s) {
  let answer = '';
  const arr = s.split(' ');

  answer = `${Math.min(...arr)} ${Math.max(...arr)}`;

  return answer;
}
