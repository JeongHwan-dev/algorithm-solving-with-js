function solution(s) {
  let conversionTimes = 0;
  let removedZeroCount = 0;

  function binaryConversion(str) {
    const convertedStr = str
      .split('')
      .filter((n) => {
        if (n === '1') {
          return true;
        } else {
          removedZeroCount++;
        }
      })
      .length.toString(2);

    return convertedStr;
  }

  while (s !== '1') {
    s = binaryConversion(s);
    conversionTimes++;
  }

  return [conversionTimes, removedZeroCount];
}
