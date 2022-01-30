// Solution 1
function balancedSums(arr) {
  const totalSum = arr.reduce((acc, cur) => acc + cur, 0);
  let leftPartSum = 0;

  for (const currentNum of arr) {
    if (totalSum - currentNum - leftPartSum === leftPartSum) {
      return 'YES';
    }

    leftPartSum += currentNum;
  }

  return 'NO';
}
