// Solution 1
// for 문과, slice(), splice() 메서드를 활용한 솔루션
function solution1(land) {
  const N = land.length;

  for (let x = 1; x < N; x++) {
    for (let y = 0; y < 4; y++) {
      const upperLine = land[x - 1].slice();

      upperLine.splice(y, 1);
      land[x][y] += Math.max(...upperLine);
    }
  }

  const maxScore = Math.max(...land[N - 1]);

  return maxScore;
}

// Solution 2
// reduce() 메서드를 활용한 솔루션
function solution2(land) {
  const lastLine = land.reduce(
    (acc, cur) => [
      cur[0] + Math.max(acc[1], acc[2], acc[3]),
      cur[1] + Math.max(acc[0], acc[2], acc[3]),
      cur[2] + Math.max(acc[0], acc[1], acc[3]),
      cur[3] + Math.max(acc[0], acc[1], acc[2]),
    ],
    [0, 0, 0, 0]
  );
  const maxScore = Math.max(...lastLine);

  return maxScore;
}
