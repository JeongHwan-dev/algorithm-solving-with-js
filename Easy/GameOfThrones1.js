// Solution 1
function gameOfThrones(s) {
  const n = s.length;
  const map = new Map();
  let oddNumberCount = 0;

  for (const alphabet of s) {
    map.has(alphabet)
      ? map.set(alphabet, map.get(alphabet) + 1)
      : map.set(alphabet, 1);
  }

  for (const [alphabet, count] of map) {
    if (count % 2 === 1) {
      oddNumberCount++;
    }

    if (
      (n % 2 === 0 && oddNumberCount > 1) ||
      (n % 2 === 1 && oddNumberCount > 2)
    ) {
      return 'NO';
    }
  }

  return 'YES';
}
