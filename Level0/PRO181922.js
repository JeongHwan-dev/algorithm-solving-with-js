// Solution 1
function solution(arr, queries) {
  const copiedArr = [...arr];

  queries.forEach(([s, e, k]) => {
    for (let i = s; i <= e; i++) {
      if (i % k === 0) {
        copiedArr[i] += 1;
      }
    }
  });

  return copiedArr;
}
