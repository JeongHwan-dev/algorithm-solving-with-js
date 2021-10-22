// Solution 1
// forEach() 메서드를 활용한 솔루션
function solution1(A, B) {
  let score = 0;
  let i = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  B.forEach((num) => {
    if (A[i] < num) {
      score++;
      i++;
    }
  });

  return score;
}

// Solution 2
// filter() 메서드를 활용한 솔루션
function solution2(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let i = 0;
  const score = B.filter((num) => {
    if (num > A[i]) {
      i++;
      return num;
    }
  }).length;

  return score;
}
