// Solution 1
function solution(binomial) {
  const [num1, operator, num2] = binomial.split(' ');

  switch (operator) {
    case '+':
      return Number(num1) + Number(num2);
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
  }
}
