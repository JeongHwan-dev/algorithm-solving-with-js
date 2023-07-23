// Solution 1
const sumOfArray = (array) => array.reduce((acc, cur) => acc + cur, 0);

function solution(arr1, arr2) {
  if (arr1.length === arr2.length) {
    const sumOfArray1 = sumOfArray(arr1);
    const sumOfArray2 = sumOfArray(arr2);

    if (sumOfArray1 === sumOfArray2) {
      return 0;
    }

    return sumOfArray1 > sumOfArray2 ? 1 : -1;
  }

  return arr1.length > arr2.length ? 1 : -1;
}
