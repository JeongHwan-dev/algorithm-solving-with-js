// Solution 1
function isArithmeticSequence(array) {
  if (array.length < 3) {
    return false;
  }

  if (array[1] * 2 === array[0] + array[2]) {
    return true;
  }

  return false;
}

function solution1(babbling) {
  return isArithmeticSequence(babbling)
    ? babbling[babbling.length - 1] * 2 - babbling[babbling.length - 2]
    : babbling[babbling.length - 1] * 2;
}

// Solution 2
function isArithmeticSequence(array) {
  if (array.length < 3) {
    return false;
  }

  if (array[1] * 2 === array[0] + array[2]) {
    return true;
  }

  return false;
}

function solution2(babbling) {
  return (
    babbling[babbling.length - 1] * 2 -
    (isArithmeticSequence(babbling) ? babbling[babbling.length - 2] : 0)
  );
}
