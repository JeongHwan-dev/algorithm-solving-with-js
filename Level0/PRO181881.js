const isSameArrays = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }

  return true;
};

const isEvenNumber = (num) => {
  return num % 2 === 0;
};

const convertNumArray = (numArray) => {
  const COMPARE_NUMBER = 50;

  return numArray.map((num) => {
    if (num >= COMPARE_NUMBER && isEvenNumber(num)) {
      return num / 2;
    }

    if (num < COMPARE_NUMBER && !isEvenNumber(num)) {
      return num * 2 + 1;
    }

    return num;
  });
};

// Solution 1
const solution1 = (numArray) => {
  let convertingArrayCount = 0;

  while (true) {
    const convertedNumArray = convertNumArray(numArray);

    if (isSameArrays(numArray, convertedNumArray)) {
      break;
    }

    numArray = convertedNumArray;
    convertingArrayCount += 1;
  }

  return convertingArrayCount;
};

// Solution 2
const solution2 = (numArray) => {
  let convertingArrayCount = 0;

  while (!isSameArrays(numArray, convertNumArray(numArray))) {
    numArray = convertNumArray(numArray);
    convertingArrayCount += 1;
  }

  return convertingArrayCount;
};
