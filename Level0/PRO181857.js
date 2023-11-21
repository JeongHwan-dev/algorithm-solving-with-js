// Solution 1
function solution1(strArr) {
  const counterList = [];

  for (const str of strArr) {
    counterList[str.length] === undefined
      ? (counterList[str.length] = 1)
      : (counterList[str.length] += 1);
  }

  return Math.max(...counterList.filter((element) => !isNaN(element)));
}

// Solution 2
function solution2(strArr) {
  const counterMap = new Map();

  for (const str of strArr) {
    counterMap.set(str.length, counterMap.has(str.length) ? counterMap.get(str.length) + 1 : 1);
  }

  return Math.max(...counterMap.values());
}
