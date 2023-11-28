// Solution 1
const getGreatestCommonDivisor = (num1, num2) => {
  return num2 === 0 ? num1 : getGreatestCommonDivisor(num2, num1 % num2);
};

const solution = (numer1, denom1, numer2, denom2) => {
  const numerator = numer1 * denom2 + numer2 * denom1;
  const denominator = denom1 * denom2;
  const greatestCommonDivisor = getGreatestCommonDivisor(numerator, denominator);

  return [numerator / greatestCommonDivisor, denominator / greatestCommonDivisor];
};
