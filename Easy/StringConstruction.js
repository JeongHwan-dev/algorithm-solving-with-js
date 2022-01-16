// Solution 1
function stringConstruction(s) {
  const set = new Set(s.split(''));

  return set.size;
}
