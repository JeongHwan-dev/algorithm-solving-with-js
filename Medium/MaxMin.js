// Solution 1
function maxMin(k, arr) {
  const _arr = arr.slice();
  let minGap = Number.MAX_SAFE_INTEGER;

  _arr.sort((a, b) => a - b);

  for (let i = 0; i <= _arr.length - k; i++) {
    const gap = _arr[i + k - 1] - _arr[i];

    if (gap < minGap) {
      minGap = gap;
    }
  }

  return minGap;
}
