// Solution 1
// split() 메서드를 사용한 솔루션
function solution1(n) {
  const convertedNum = parseInt(n.toString(3).split('').reverse().join(''), 3);

  return convertedNum;
}

// Solution 2
// 전개 연산자를 사용한 솔루션
function solution2(n) {
  const convertedNum = parseInt([...n.toString(3)].reverse().join(''), 3);

  return convertedNum;
}
