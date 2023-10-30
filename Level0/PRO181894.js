// Solution 1
const solution = (arr) => {
  const startIndex = arr.indexOf(2);
  const endIndex = arr.lastIndexOf(2);

  return startIndex === -1 ? [-1] : arr.slice(startIndex, endIndex + 1);
};
