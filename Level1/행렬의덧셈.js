// Solution 1
function solution1(arr1, arr2) {
  const sumMatrix = [];

  for (let r = 0; r < arr1.length; r++) {
    const temp = [];

    for (let c = 0; c < arr1[0].length; c++) {
      temp.push(arr1[r][c] + arr2[r][c]);
    }

    sumMatrix.push(temp);
  }

  return sumMatrix;
}

// Solution 2
function solution2(arr1, arr2) {
  const sumMatrix = arr1.map((row, rowIndex) =>
    row.map((num, columnIndex) => num + arr2[rowIndex][columnIndex])
  );

  return sumMatrix;
}
