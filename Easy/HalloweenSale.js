// Solution 1
function howManyGames(p, d, m, s) {
  let totalCount = 0;

  while (s - p >= 0) {
    s -= p;
    p - d >= m ? (p -= d) : (p = m);
    totalCount++;
  }

  return totalCount;
}
