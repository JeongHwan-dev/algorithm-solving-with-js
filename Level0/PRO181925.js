// Solution 1
const getCommand = (originalNum, convertedNum) => {
  const subtractionOfTwoNumbers = convertedNum - originalNum;

  switch (subtractionOfTwoNumbers) {
    case 1:
      return 'w';

    case -1:
      return 's';

    case 10:
      return 'd';

    case -10:
      return 'a';
  }
};

function solution(numLog) {
  let commands = '';

  for (let i = 0; i < numLog.length - 1; i++) {
    commands += getCommand(numLog[i], numLog[i + 1]);
  }

  return commands;
}
