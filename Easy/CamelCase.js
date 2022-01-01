// Solution 1
function camelcase(s) {
  const words = [];
  let temp = [];

  for (const alphabet of s) {
    if (alphabet === alphabet.toUpperCase()) {
      words.push(temp);
      temp = [];
    } else {
      temp.push(alphabet);
    }
  }

  words.push(temp);

  return words.length;
}
