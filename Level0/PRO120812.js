// Solution 1
function solution1(array) {
  const numCountingMap = new Map();
  let mode = -1;
  let maxCount = 0;

  array.forEach((num) => {
    numCountingMap.set(num, numCountingMap.has(num) ? numCountingMap.get(num) + 1 : 1);

    const countOfNum = numCountingMap.get(num);

    if (countOfNum > maxCount) {
      maxCount = countOfNum;
      mode = num;
    } else if (countOfNum === maxCount) {
      mode = -1;
    }
  });

  return mode;
}

// Solution 2
function solution2(array) {
  const numCounting = array.reduce(
    (acc, cur) =>
      acc[cur] === undefined
        ? {
            ...acc,
            [cur]: 1,
          }
        : {
            ...acc,
            [cur]: acc[cur] + 1,
          },
    {}
  );
  const maxCount = Math.max(...Object.values(numCounting));
  const modes = Object.keys(numCounting).filter((num) => numCounting[num] === maxCount);

  return modes.length === 1 ? Number(modes[0]) : -1;
}
