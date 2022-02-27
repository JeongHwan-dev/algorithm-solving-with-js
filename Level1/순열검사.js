// Solution 1
function solution1(arr) {
  const _arr = arr.slice();
  let result = true;

  _arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (_arr[i] !== i + 1) {
      result = false;
      break;
    }
  }

  return result;
}

// Solution 2
function solution2(arr) {
  const maxNumber = Math.max(...arr);
  const check = Array.from({ length: maxNumber + 1 }, () => 0);
  let result = true;

  if (maxNumber !== arr.length) {
    return false;
  }

  for (const num of arr) {
    if (check[num] === 1) {
      result = false;
      break;
    } else {
      check[num] += 1;
    }
  }

  return result;
}
