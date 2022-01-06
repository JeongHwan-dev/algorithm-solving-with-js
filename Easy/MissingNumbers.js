// Solution 1
function missingNumbers(arr, brr) {
  const arrMap = new Map();
  const brrMap = new Map();
  const missingNums = [];

  for (const num of arr) {
    arrMap.has(num) ? arrMap.set(num, arrMap.get(num) + 1) : arrMap.set(num, 1);
  }

  for (const num of brr) {
    brrMap.has(num) ? brrMap.set(num, brrMap.get(num) + 1) : brrMap.set(num, 1);
  }

  for (const [num, count] of brrMap) {
    if (!arrMap.has(num) || (arrMap.has(num) && arrMap.get(num) !== count)) {
      missingNums.push(num);
    }
  }

  missingNums.sort((a, b) => a - b);

  return missingNums;
}
