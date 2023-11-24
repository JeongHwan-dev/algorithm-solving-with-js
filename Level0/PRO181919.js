// Solution 1
const getCollatzNum = (num) => {
  return num % 2 === 0 ? num / 2 : 3 * num + 1;
};

const solution = (n) => {
  const collatzSequence = [n];

  while (n !== 1) {
    const collatzNum = getCollatzNum(n);

    collatzSequence.push(collatzNum);
    n = collatzNum;
  }

  return collatzSequence;
};
