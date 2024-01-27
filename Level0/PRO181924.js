// Solution 1
function solution(arr, queries) {
  const copiedArr = arr.slice();

  queries.forEach(([firstIndex, secondIndex]) => {
    [copiedArr[firstIndex], copiedArr[secondIndex]] = [
      copiedArr[secondIndex],
      copiedArr[firstIndex],
    ];
  });

  return copiedArr;
}
