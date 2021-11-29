// Solution 1
function solution1(strings, n) {
  const _strings = strings.slice();

  _strings.sort((a, b) => {
    const aValue = a[n];
    const bValue = b[n];

    return aValue === bValue
      ? (a > b) - (a < b)
      : (aValue > bValue) - (aValue < bValue);
  });

  return _strings;
}

// Solution 2
function solution2(strings, n) {
  const _strings = strings.slice();

  _strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );

  return _strings;
}
