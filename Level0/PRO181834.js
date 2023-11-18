// Solution 1
function solution1(myString) {
  const BASE_ALPHABET = 'l';
  const ASCII_OF_BASE_ALPHABET = BASE_ALPHABET.charAt();

  return [...myString]
    .map((alphabet) => (alphabet.charAt() < ASCII_OF_BASE_ALPHABET ? BASE_ALPHABET : alphabet))
    .join('');
}

// Solution 2
function solution2(myString) {
  const BASE_ALPHABET = 'l';

  return [...myString]
    .map((alphabet) => (alphabet < BASE_ALPHABET ? BASE_ALPHABET : alphabet))
    .join('');
}
