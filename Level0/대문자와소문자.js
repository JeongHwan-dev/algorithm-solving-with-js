// Solution 1
const isUpperCase = (alphabet) => {
  return alphabet === alphabet.toUpperCase();
};

const solution = (my_string) => {
  return [...my_string]
    .map((alphabet) => (isUpperCase(alphabet) ? alphabet.toLowerCase() : alphabet.toUpperCase()))
    .join('');
};
