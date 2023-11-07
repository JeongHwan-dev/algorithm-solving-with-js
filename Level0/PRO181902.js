// Solution 1
const UPPER_CASE_A_ASCII_CODE = 'A'.charCodeAt();
const LOWER_CASE_A_ASCII_CODE = 'a'.charCodeAt();
const TOTAL_NUMBER_OF_ALPHABETS = 26;

function solution(my_string) {
  const alphabets = Array(TOTAL_NUMBER_OF_ALPHABETS * 2).fill(0);

  [...my_string].forEach((alphabet) => {
    const asciiCode = alphabet.charCodeAt();

    if (asciiCode >= LOWER_CASE_A_ASCII_CODE) {
      alphabets[asciiCode - LOWER_CASE_A_ASCII_CODE + TOTAL_NUMBER_OF_ALPHABETS] += 1;
    } else {
      alphabets[asciiCode - UPPER_CASE_A_ASCII_CODE] += 1;
    }
  });

  return alphabets;
}
