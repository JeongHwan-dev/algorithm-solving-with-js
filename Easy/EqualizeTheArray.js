// Solution 1
function equalizeArray(arr) {
  const map = new Map();
  let maxCount = Number.MIN_SAFE_INTEGER;

  for (const num of arr) {
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
  }

  for (const [num, count] of map) {
    if (maxCount < count) {
      maxCount = count;
    }
  }

  return arr.length - maxCount;
}
