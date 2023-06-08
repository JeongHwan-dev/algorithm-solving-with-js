// Solution 1
function solution1(my_string, alp) {
  return [...my_string]
    .map((alphabet) => (alphabet === alp ? alphabet.toUpperCase() : alphabet))
    .join('');
}

// Solution 2
function solution2(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}
