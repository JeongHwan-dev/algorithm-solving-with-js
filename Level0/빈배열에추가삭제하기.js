// Solution 1
function solution1(arr, flag) {
  const x = [];

  flag.forEach((value, index) => {
    if (value) {
      x.push(...Array.from({ length: arr[index] * 2 }, () => arr[index]));
    } else {
      for (let i = 0; i < arr[index]; i++) {
        x.pop();
      }
    }
  });

  return x;
}

// Solution 2
function solution2(arr, flag) {
  return flag.reduce(
    (acc, cur, index) =>
      cur ? [...acc, ...new Array(arr[index] * 2).fill(arr[index])] : acc.slice(0, -arr[index]),
    []
  );
}
