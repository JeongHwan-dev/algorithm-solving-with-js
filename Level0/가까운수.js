// Solution 1
function solution(array, n) {
  const sortedArrayWithN = [...array, n].sort((a, b) => a - b);
  const indexOfN = sortedArrayWithN.indexOf(n);

  if (indexOfN === sortedArrayWithN.length - 1) {
    return sortedArrayWithN[indexOfN - 1];
  }

  return n - sortedArrayWithN[indexOfN - 1] <= sortedArrayWithN[indexOfN + 1] - n
    ? sortedArrayWithN[indexOfN - 1]
    : sortedArrayWithN[indexOfN + 1];
}
