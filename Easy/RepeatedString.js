// Solution 1
function repeatedString(s, n) {
  const repeatCount = Math.floor(n / s.length);
  const remainder = n % s.length;
  let maxCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === 'a') {
      maxCount += repeatCount;

      if (i < remainder) {
        maxCount++;
      }
    }
  }

  return maxCount;
}
