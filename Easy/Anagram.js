// Solution 1
function makeMap(str) {
  const map = new Map();

  for (const item of str) {
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
  }

  return map;
}

function anagram(s) {
  const half = s.length / 2;
  let replacedCount = 0;

  if (!Number.isInteger(half)) {
    return -1;
  }

  const firstMap = makeMap(s.substring(0, half));
  const secondMap = makeMap(s.substring(half));

  for (const [item, _] of firstMap) {
    while (secondMap.has(item)) {
      firstMap.set(item, firstMap.get(item) - 1);
      secondMap.set(item, secondMap.get(item) - 1);

      if (firstMap.get(item) === 0) {
        firstMap.delete(item);
        break;
      }

      if (secondMap.get(item) === 0) {
        secondMap.delete(item);
        break;
      }
    }
  }

  for (const [_, count] of firstMap) {
    replacedCount += count;
  }

  return replacedCount;
}

// Solution 2
function makeMap(str) {
  const map = new Map();

  for (const item of str) {
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
  }

  return map;
}

function anagram(s) {
  const half = s.length / 2;
  let replacedCount = 0;

  if (!Number.isInteger(half)) {
    return -1;
  }

  const firstMap = makeMap(s.substring(0, half));
  const secondMap = makeMap(s.substring(half));

  for (const [item, _] of firstMap) {
    while (secondMap.has(item)) {
      firstMap.set(item, firstMap.get(item) - 1);
      secondMap.set(item, secondMap.get(item) - 1);

      if (firstMap.get(item) === 0) {
        break;
      }

      if (secondMap.get(item) === 0) {
        break;
      }
    }

    replacedCount += firstMap.get(item);
  }

  return replacedCount;
}
