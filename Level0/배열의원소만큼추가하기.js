// Solution 1
function solution1(arr) {
  return arr.reduce((acc, cur) => [...acc, ...Array.from({ length: cur }, () => cur)], []);
}

// Solution 2
function solution2(arr) {
  return arr.reduce((acc, cur) => [...acc, ...new Array(cur).fill(cur)], []);
}
