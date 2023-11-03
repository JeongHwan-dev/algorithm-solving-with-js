// Solution 1
const solution = (arr, intervals) => {
  return intervals.reduce(
    (acc, [startIndex, endIndex]) => [...acc, ...arr.slice(startIndex, endIndex + 1)],
    []
  );
};
