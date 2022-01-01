// Solution 1
function rotateLeft(d, arr) {
  const rotatedArr = arr.slice();

  for (let i = 0; i < d; i++) {
    const temp = rotatedArr.shift();

    rotatedArr.push(temp);
  }

  return rotatedArr;
}
