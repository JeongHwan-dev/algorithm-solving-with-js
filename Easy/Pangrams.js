// Solution 1
function pangrams(s) {
  const sArray = s
    .split('')
    .filter((value) => value !== ' ')
    .map((alphabet) => alphabet.toLowerCase());
  const alphabetCount = new Set(sArray).size;

  return alphabetCount === 26 ? 'pangram' : 'not pangram';
}
