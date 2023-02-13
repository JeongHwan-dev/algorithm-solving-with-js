// Solution 1
function solution(my_string, num1, num2) {
  const splitedMyString = my_string.split('');

  [splitedMyString[num1], splitedMyString[num2]] = [splitedMyString[num2], splitedMyString[num1]];

  return splitedMyString.join('');
}
