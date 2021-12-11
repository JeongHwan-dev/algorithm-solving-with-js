// Solution 1
function solution1(n) {
  const convertedNum = parseInt(n.toString(3).split('').reverse().join(''), 3);

  return convertedNum;
}

// Solution 2
function solution2(n) {
  const convertedNum = parseInt([...n.toString(3)].reverse().join(''), 3);

  return convertedNum;
}
