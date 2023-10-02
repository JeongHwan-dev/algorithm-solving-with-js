// Solution 1
function solution1(arr, idx) {
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 0) {
      return i;
    }
  }

  return -1;
}

// Solution 2
function solution2(arr, idx) {
  return arr.indexOf(1, idx);
}
