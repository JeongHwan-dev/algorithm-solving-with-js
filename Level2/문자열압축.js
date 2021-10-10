function solution(s) {
  if (s.length === 1) {
    return 1;
  }

  let minLength = Number.MAX_SAFE_INTEGER;
  const mid = Math.floor(s.length / 2);

  for (let n = 1; n <= mid; n++) {
    const splittedS = [];
    let compressedS = '';

    for (let i = 0; i < Math.ceil(s.length / n); i++) {
      const part = s.substring(n * i, n * i + n);

      splittedS.push(part);
    }

    let count = 1;

    for (let i = 0; i < splittedS.length; i++) {
      if (splittedS[i] === splittedS[i + 1]) {
        count++;
      } else {
        compressedS += count > 1 ? count + splittedS[i] : splittedS[i];
        count = 1;
      }
    }

    minLength = Math.min(minLength, compressedS.length);
  }

  return minLength;
}
