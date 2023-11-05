// Solution 1
const solution1 = (i, j, k) => {
  const numList = Array.from({ length: j - i + 1 }, (_, index) => i + index);
  let numberOfk = 0;

  numList.forEach((num) => {
    numberOfk += [...String(num)].filter((num) => parseInt(num) === k).length;
  });

  return numberOfk;
};

// Solution 2
const solution2 = (i, j, k) => {
  const numList = [...Array.from({ length: j - i + 1 }, (_, index) => i + index).join('')];

  return numList.filter((num) => parseInt(num) === k).length;
};
