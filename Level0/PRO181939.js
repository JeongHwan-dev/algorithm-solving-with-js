// Solution 1
const combineNumbers = (firstNum, lastNum) => {
  return Number(`${firstNum}${lastNum}`);
};

const solution = (a, b) => {
  return Math.max(...[combineNumbers(a, b), combineNumbers(b, a)]);
};
