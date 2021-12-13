// Solution 1
function solution1(n) {
  for (let num = 2; num < n; num++) {
    if (n % num === 1) {
      return num;
    }
  }
}
