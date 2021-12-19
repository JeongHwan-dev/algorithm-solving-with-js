// Solution 1
function solution1(citations) {
  const _citations = citations.slice();
  const n = _citations.length;
  let HIndex = 0;

  _citations.sort((a, b) => b - a);

  while (HIndex <= n) {
    if (HIndex + 1 <= _citations[HIndex]) {
      HIndex++;
    } else {
      break;
    }
  }

  return HIndex;
}
