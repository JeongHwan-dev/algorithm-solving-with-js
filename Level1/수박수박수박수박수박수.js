// Solution 1
function solution1(n) {
  let result = '';

  for (let i = 0; i < n; i++) {
    i % 2 === 0 ? (result += '수') : (result += '박');
  }

  return result;
}

// Solution 2
function solution2(n) {
  const repeatCnt = Math.floor(n / 2);
  let result = '수박'.repeat(repeatCnt);

  if (n % 2) {
    result += '수';
  }

  return result;
}

// Solution 3
function solution3(n) {
  const result = Array.from({ length: n }, (_, index) =>
    index % 2 === 0 ? '수' : '박'
  ).join('');

  return result;
}
