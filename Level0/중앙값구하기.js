// Solution 1
function solution1(array) {
  const copiedArray = array.slice().sort((a, b) => a - b);

  return copiedArray[parseInt(copiedArray.length / 2)];
}

// Solution 2
function solution2(array) {
  return array.sort((a, b) => a - b).at(Math.floor(array.length / 2));
}
