// Solution 1
function palindromeIndex(s) {
  if (s === s.split('').reverse().join('')) {
    return -1;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      if (
        s[i + 1] === s[s.length - i - 1] &&
        s[i + 2] === s[s.length - i - 2]
      ) {
        return i;
      } else {
        return s.length - i - 1;
      }
    }
  }

  return -1;
}
