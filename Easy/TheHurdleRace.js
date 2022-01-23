// Solution 1
function hurdleRace(k, height) {
  const maxHeight = Math.max(...height);

  return maxHeight <= k ? 0 : maxHeight - k;
}
