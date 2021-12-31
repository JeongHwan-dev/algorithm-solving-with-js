// Solution 1
function solution1(gems) {
  const kind = new Set(gems).size;
  const gemMap = new Map();
  const sections = [];

  gems.forEach((gem, idx) => {
    if (gemMap.has(gem)) {
      gemMap.delete(gem);
    }

    gemMap.set(gem, idx);

    if (gemMap.size === kind) {
      sections.push([gemMap.values().next().value + 1, idx + 1]);
    }
  });

  sections.sort((a, b) =>
    a[1] - a[0] === b[1] - b[0] ? a[0] - b[0] : a[1] - a[0] - (b[1] - b[0])
  );

  return sections[0];
}

// Solution 2
function solution2(gems) {
  let shortestSection = [0, gems.length];
  let start = 0;
  let end = 0;

  const gemKinds = new Set(gems).size;
  const collect = new Map();

  collect.set(gems[start], 1);

  while (start < gems.length && end < gems.length) {
    if (collect.size === gemKinds) {
      if (end - start < shortestSection[1] - shortestSection[0]) {
        shortestSection = [start + 1, end + 1];
      }

      collect.set(gems[start], collect.get(gems[start]) - 1);

      if (collect.get(gems[start]) === 0) {
        collect.delete(gems[start]);
      }

      start += 1;
    } else {
      end += 1;
      collect.set(gems[end], 1 + (collect.get(gems[end]) || 0));
    }
  }

  return shortestSection;
}
