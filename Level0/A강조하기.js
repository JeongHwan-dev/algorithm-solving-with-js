// Solution 1
function solution1(myString) {
  return myString
    .toLowerCase()
    .split('')
    .map((alphabet) => (alphabet === 'a' ? alphabet.toUpperCase() : alphabet))
    .join('');
}

// Solution 2
function solution2(myString) {
  return myString.toLowerCase().replaceAll('a', 'A');
}
