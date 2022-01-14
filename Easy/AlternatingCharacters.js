// Solution 1
function alternatingCharacters(s) {
  let count = 0;
  let temp = s[0];

  for (let i = 1; i < s.length; i++) {
    temp === s[i] ? count++ : (temp = s[i]);
  }

  return count;
}
