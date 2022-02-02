// Solution 1
function pickingNumbers(a) {
  const _a = a.slice();

  _a.sort((a, b) => a - b);

  let startNum = _a[0];
  let maxCount = Number.MIN_SAFE_INTEGER;
  let count = 1;

  for (let i = 1; i < _a.length; i++) {
    if (startNum + 1 >= _a[i]) {
      count++;
    } else {
      maxCount = Math.max(maxCount, count);
      startNum = _a[i];
      count = 1;
    }
  }

  maxCount = Math.max(maxCount, count);

  return maxCount;
}
