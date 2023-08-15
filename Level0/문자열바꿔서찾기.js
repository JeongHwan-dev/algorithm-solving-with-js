// Solution 1
function solution(myString, pat) {
  return [...myString]
    .map((alphabet) => (alphabet === 'A' ? 'B' : 'A'))
    .join('')
    .includes(pat)
    ? 1
    : 0;
}
