// Solution 1
function twoArrays(k, A, B) {
  const _A = A.slice();
  const _B = B.slice();

  _A.sort((a, b) => a - b);
  _B.sort((a, b) => b - a);

  for (let i = 0; i < _A.length; i++) {
    if (_A[i] + _B[i] < k) {
      return 'NO';
    }
  }

  return 'YES';
}
