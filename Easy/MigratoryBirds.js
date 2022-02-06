// Solution 1
function migratoryBirds(arr) {
  const map = new Map();

  arr.forEach((type) =>
    map.has(type) ? map.set(type, map.get(type) + 1) : map.set(type, 1)
  );

  let max = [0, 0];

  for (const [key, count] of map) {
    if (count > max[1]) {
      max[0] = key;
      max[1] = count;
    } else if (count === max[1]) {
      if (key < max[0]) {
        max[0] = key;
        max[1] = count;
      }
    }
  }

  return max[0];
}
