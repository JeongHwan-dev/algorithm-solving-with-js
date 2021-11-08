// Solution 1
function solution1(arr) {
  let answer = [];
  let minIdx = 0;
  let min = arr[minIdx];

  if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
        minIdx = i;
      }
    }

    arr.splice(minIdx, 1);
    answer = arr;
  } else {
    answer.push(-1);
  }

  return answer;
}

// Solution 2
function solution2(arr) {
  const _arr = arr.slice();
  const minNum = Math.min(..._arr);
  const minNumIndex = _arr.indexOf(minNum);

  _arr.splice(minNumIndex, 1);

  if (_arr.length === 0) {
    _arr.push(-1);
  }

  return _arr;
}
