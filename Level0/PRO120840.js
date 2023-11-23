// Solution 1
const factorial = (num) => {
  return num === 0 ? 1 : num * factorial(num - 1);
};

const solution = (balls, share) => {
  return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
};
