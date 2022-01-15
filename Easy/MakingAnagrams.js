// Solution 1
function makingMap(str) {
  const map = new Map();

  for (const item of str) {
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
  }

  return map;
}

function makingAnagrams(s1, s2) {
  const s1Map = makingMap(s1);
  const s2Map = makingMap(s2);
  let deletedAlphabetCount = 0;

  for (const [alphabet, count] of s1Map) {
    s2Map.has(alphabet)
      ? (deletedAlphabetCount += Math.abs(count - s2Map.get(alphabet)))
      : (deletedAlphabetCount += count);
  }

  for (const [alphabet, count] of s2Map) {
    if (!s1Map.has(alphabet)) {
      deletedAlphabetCount += count;
    }
  }

  return deletedAlphabetCount;
}

// Solution 2
function makingMap(str) {
  const map = new Map();

  for (const item of str) {
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
  }

  return map;
}

function makingAnagrams(s1, s2) {
  const s1Map = makingMap(s1);
  const s2Map = makingMap(s2);
  let commonAlphabetCount = 0;

  for (const [alphabet, count] of s1Map) {
    if (s2Map.has(alphabet)) {
      commonAlphabetCount +=
        count > s2Map.get(alphabet) ? s2Map.get(alphabet) : count;
    }
  }

  const deletedAlphabetCount = s1.length + s2.length - commonAlphabetCount * 2;

  return deletedAlphabetCount;
}
