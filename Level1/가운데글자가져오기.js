// Solution 1
function solution1(s) {
  const midIndex = Math.floor(s.length / 2);
  const midChar =
    s.length % 2 === 0 ? s.substr(midIndex, -1, 2) : s.substr(midIndex, 1);

  return midChar;
}

// Solution 2
function solution2(s) {
  const midIndex = Math.floor(s.length / 2);
  const midChar =
    s.length % 2 === 0
      ? s.slice(midIndex - 1, midIndex + 1)
      : s.slice(midIndex, midIndex + 1);

  return midChar;
}
