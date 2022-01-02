// Solution 1
function largestPermutation(k, arr) {
  const _arr = arr.slice();
  const n = _arr.length;
  const position = {};

  for (let i = 0; i < n; i++) {
    position[_arr[i]] = i;
  }

  for (let i = 0; i < n; i++) {
    if (_arr[i] !== n - i && k > 0) {
      position[_arr[i]] = position[n - i];
      [_arr[i], _arr[position[n - i]]] = [_arr[position[n - i]], _arr[i]];
      k--;
    }

    if (k === 0) {
      break;
    }
  }

  return _arr;
}
