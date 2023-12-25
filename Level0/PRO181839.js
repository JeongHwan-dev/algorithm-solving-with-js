const isOddNumber = (num) => {
  return num % 2 === 1;
};

const solution = (a, b) => {
  if (isOddNumber(a) && isOddNumber(b)) {
    return a ** 2 + b ** 2;
  }

  if (isOddNumber(a) || isOddNumber(b)) {
    return 2 * (a + b);
  }

  return Math.abs(a - b);
};
