function solution(msg) {
  const indexArray = [];
  const dictionary = [
    '',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const splittedMsg = msg.split('');
  let currentInput = splittedMsg[0];

  for (let i = 1; i < splittedMsg.length; i++) {
    const nextInput = splittedMsg[i];
    const combination = currentInput + nextInput;

    if (dictionary.indexOf(combination) === -1) {
      dictionary.push(combination);
      indexArray.push(dictionary.indexOf(currentInput));
      currentInput = nextInput;
    } else {
      currentInput = combination;
    }
  }

  indexArray.push(dictionary.indexOf(currentInput));

  return indexArray;
}
