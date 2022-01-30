// Solution 1
function icecreamParlor(m, arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === m) {
        return [i + 1, j + 1];
      }
    }
  }
}
