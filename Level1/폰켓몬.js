// Solution 1
// Map 객체를 이용한 솔루션
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
// Set 객체를 이용한 솔루션
function solution2(nums) {
  const set = new Set(nums);
  const count = parseInt(nums.length / 2);
  const maxCount = set.size > count ? count : set.size;

  return maxCount;
}

// Solution 3
// Set 객체를 이용한 솔루션
function solution3(nums) {
  const set = new Set(nums);
  const maxCount = nums.length / 2;

  return set.size > maxCount ? maxCount : set.size;
}
