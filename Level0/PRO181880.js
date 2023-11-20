// Solution 1
const operationToMakeHalf = (num) => {
  return num % 2 === 0 ? num / 2 : (num - 1) / 2;
};

const getCountOfOperationsToMakeOne = (num) => {
  let count = 0;

  while (num > 1) {
    num = operationToMakeHalf(num);
    count += 1;
  }

  return count;
};

function solution(numList) {
  return numList.reduce((acc, cur) => acc + getCountOfOperationsToMakeOne(cur), 0);
}
