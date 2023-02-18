// Solution 1
function solution(before, after) {
  const beforeArray = [...before].sort();
  const afterArray = [...after].sort();

  for (let i = 0; i < before.length; i++) {
    if (beforeArray[i] !== afterArray[i]) {
      return 0;
    }
  }

  return 1;
}

// Solution 2
function solution2(before, after) {
  return [...before].sort().join('') === [...after].sort().join('') ? 1 : 0;
}
