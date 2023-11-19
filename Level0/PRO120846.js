// Solution 2
const MIN_DIVISOR_COUNT_OF_COMPOSITE_NUM = 3;

const getDivisorList = (num) => {
  const divisorList = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisorList.push(i);
    }
  }

  return divisorList;
};

function solution(n) {
  return Array.from({ length: n }, (_, index) => index + 1).filter(
    (num) => getDivisorList(num).length >= MIN_DIVISOR_COUNT_OF_COMPOSITE_NUM
  ).length;
}
