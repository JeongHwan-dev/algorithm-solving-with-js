function solution(strings, n) {
  strings.sort((a, b) => {
    let aValue = a[n];
    let bValue = b[n];

    return aValue === bValue
      ? (a > b) - (a < b)
      : (aValue > bValue) - (aValue < bValue);
  });

  return strings;
}
