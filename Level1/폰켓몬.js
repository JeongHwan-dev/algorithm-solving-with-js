// Solution 1
function solution1(nums) {
  const map = new Map();
  const count = parseInt(nums.length / 2);

  for (const n of nums) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }

  const maxCount = map.size > count ? count : map.size;

  return maxCount;
}

// Solution 2
function solution2(nums) {
  const pokemonSet = new Set(nums);
  const halfCount = nums.length / 2;
  const maxTypeCount =
    pokemonSet.size > halfCount ? halfCount : pokemonSet.size;

  return maxTypeCount;
}
