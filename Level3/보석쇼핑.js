function solution(gems) {
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
