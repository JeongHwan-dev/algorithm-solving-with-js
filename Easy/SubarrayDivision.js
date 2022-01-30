// Solution 1
function birthday(s, d, m) {
  let wayCount = 0;

  for (let i = 0; i < s.length - m + 1; i++) {
    const temp = s.slice(i, i + m);
    const sum = temp.reduce((acc, cur) => acc + cur, 0);

    if (sum === d) {
      wayCount++;
    }
  }

  return wayCount;
}
