// Solution 1
function circularArrayRotation(a, k, queries) {
  const _a = a.slice();

  for (let i = 0; i < k; i++) {
    _a.unshift(_a.pop());
  }

  const result = queries.map((query) => _a[query]);

  return result;
}
