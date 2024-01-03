// Solution 1
function solution(arr, k) {
  const deduplicationArray = [...new Set(arr)];

  return Array.from({ length: k }, (_, index) => deduplicationArray[index] ?? -1);
}
