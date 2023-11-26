// Solution 1
function solution(sides) {
  const maxSide = Math.max(...sides);
  const sumOfSides = sides.reduce((acc, cur) => acc + cur, 0);

  return maxSide < sumOfSides - maxSide ? 1 : 2;
}
