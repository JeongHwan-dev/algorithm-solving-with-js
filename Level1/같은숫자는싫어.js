// Solution 1
function solution1(arr) {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      filteredArr.push(arr[i]);
    } else if (arr[i] !== arr[i - 1]) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}

// Solution 2
function solution2(arr) {
  const filteredArr = arr.filter((num, index) => num !== arr[index + 1]);

  return filteredArr;
}

// Solution 3
function solution3(arr) {
  const filteredArr = arr.filter((num, index) =>
    index === 0 ? true : num !== arr[index - 1]
  );

  return filteredArr;
}
