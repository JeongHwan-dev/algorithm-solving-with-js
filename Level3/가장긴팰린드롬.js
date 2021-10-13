function isPalindrome(str) {
  const half = Math.floor(str.length / 2);

  for (let i = 0; i < half; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

function solution(s) {
  for (let n = s.length; n > 0; n--) {
    for (let i = 0; i <= s.length - n; i++) {
      const part = s.slice(i, i + n);

      if (isPalindrome(part)) {
        return n;
      }
    }
  }

  return 1;
}
