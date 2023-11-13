const ENGLISH_NUMBERS = Object.freeze({
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
});

// Solution 1
function solution1(numbers) {
  let convertedNumbers = numbers;

  Object.keys(ENGLISH_NUMBERS).forEach((keyOfEnglishNumber) => {
    convertedNumbers = convertedNumbers.replaceAll(
      keyOfEnglishNumber,
      ENGLISH_NUMBERS[keyOfEnglishNumber]
    );
  });

  return Number(convertedNumbers);
}

// Solution 2
function solution2(numbers) {
  return Number(
    Object.keys(ENGLISH_NUMBERS).reduce(
      (acc, cur) => acc.replaceAll(cur, ENGLISH_NUMBERS[cur]),
      numbers
    )
  );
}
