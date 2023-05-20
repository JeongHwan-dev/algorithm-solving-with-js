// Solution 1
const BASE_NUMBER = 50;

function solution(arr) {
  return arr.map((number) => {
    if (number >= BASE_NUMBER && number % 2 === 0) {
      return number / 2;
    } else if (number < BASE_NUMBER && number % 2 !== 0) {
      return number * 2;
    }

    return number;
  });
}
