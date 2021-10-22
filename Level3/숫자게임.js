function solution(A, B) {
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
