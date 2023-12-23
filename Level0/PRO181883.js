// Solution 1
function solution(arr, queries) {
  const copiedArray = [...arr];

  queries.forEach(([s, e]) => {
    for (let i = s; i <= e; i++) {
      copiedArray[i] += 1;
    }
  });

  return copiedArray;
}
