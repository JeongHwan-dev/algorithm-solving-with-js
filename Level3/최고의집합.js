function solution(n, s) {
  const share = Math.floor(s / n);

  if (share < 1) {
    return [-1];
  }

  const rest = s % n;
  const result = new Array(n).fill(share);

  for (let i = 0; i < rest; i++) {
    result[result.length - 1 - i]++;
  }

  return result;
}
