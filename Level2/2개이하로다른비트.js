// Solution 1
function solution1(numbers) {
  const result = numbers.map((number) => {
    if (number % 2 === 0) {
      return number + 1;
    } else {
      const binaryNumber = '0' + number.toString(2);
      const len = binaryNumber.length;

      for (let i = len - 1; i >= 0; i--) {
        if (binaryNumber[i - 1] + binaryNumber[i] === '01') {
          return number + Math.pow(2, len - i - 1);
        }
      }
    }
  });

  return result;
}
