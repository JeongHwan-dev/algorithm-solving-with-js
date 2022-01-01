// Solution 1
function marcsCakewalk(calorie) {
  const _calorie = calorie.slice();

  _calorie.sort((a, b) => b - a);

  const minMiles = _calorie.reduce(
    (acc, cur, idx) => acc + Math.pow(2, idx) * cur,
    0
  );

  return minMiles;
}
