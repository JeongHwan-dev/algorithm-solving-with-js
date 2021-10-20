function getOperationResult(formula) {
  const [num1, operator, num2] = formula;
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
  }

  return result;
}

function solution(expression) {
  let max = Number.MIN_SAFE_INTEGER;
  const priorities = [
    ['*', '+', '-'],
    ['*', '-', '+'],
    ['+', '*', '-'],
    ['+', '-', '*'],
    ['-', '*', '+'],
    ['-', '+', '*'],
  ];
  const formula = expression
    .split(/(\D)/)
    .map((value) => (isNaN(value) ? value : Number(value)));

  for (const priority of priorities) {
    const _formula = formula.slice();

    for (const operator of priority) {
      while (_formula.includes(operator)) {
        const index = _formula.indexOf(operator);
        const operationResult = getOperationResult(
          _formula.slice(index - 1, index + 2)
        );

        _formula.splice(index - 1, 3, operationResult);
      }
    }

    const result = Math.abs(_formula[0]);

    max = Math.max(max, result);
  }

  return max;
}
