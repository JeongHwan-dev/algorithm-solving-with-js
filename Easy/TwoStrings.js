// Solution 1
function twoStrings(s1, s2) {
  for (const alphabet of s1) {
    if (s2.indexOf(alphabet) !== -1) {
      return 'YES';
    }
  }

  return 'NO';
}
