// Solution 1
function solution1(s) {
  let convertedStr;
  const arr = s.split(' ');

  convertedStr = arr
    .map((word) => {
      let tmp = word.split('');

      for (let i = 0; i < tmp.length; i++) {
        tmp[i] = i % 2 === 0 ? tmp[i].toUpperCase() : tmp[i].toLowerCase();
      }

      return tmp.join('');
    })
    .join(' ');

  return convertedStr;
}

// Solution 2
function solution2(s) {
  const convertedStr = s
    .split(' ')
    .map((word) =>
      word
        .split('')
        .map((alphabet, index) =>
          index % 2 === 0 ? alphabet.toUpperCase() : alphabet.toLowerCase()
        )
        .join('')
    )
    .join(' ');

  return convertedStr;
}
