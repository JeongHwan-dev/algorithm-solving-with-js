// Solution 1
function solution1(numList, n) {
  const twoDimensionalArray = [];

  for (let i = 0; i < numList.length; i += n) {
    twoDimensionalArray.push(numList.slice(i, i + n));
  }

  return twoDimensionalArray;
}

// Solution 2
function solution2(numList, n) {
  const deepCopiedNumList = [...numList];

  return Array(numList.length / n)
    .fill([])
    .map(() => deepCopiedNumList.splice(0, n));
}
