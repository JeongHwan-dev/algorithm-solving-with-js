// Solution 1
const checkNumFitTheRule = (num) => {
  for (let digit of [...String(num)]) {
    if (digit !== '0' && digit !== '5') {
      return false;
    }
  }

  return true;
};

const solution = (l, r) => {
  const numList = [];

  for (let num = l; num <= r; num++) {
    if (checkNumFitTheRule(num)) {
      numList.push(num);
    }
  }

  return numList.length === 0 ? [-1] : numList;
};
