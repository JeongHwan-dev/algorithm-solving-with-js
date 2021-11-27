// Solution 1
function solution1(s, n) {
  let array = s.split('');

  for (let i = 0; i < s.length; i++) {
    let asc = s.charCodeAt(i);

    if (asc >= 65 && asc <= 90) {
      if (asc + n > 90) {
        array[i] = 64 + (asc + n) - 90;
      } else {
        array[i] = asc + n;
      }
    } else if (asc >= 97 && asc <= 122) {
      if (asc + n > 122) {
        array[i] = 96 + (asc + n) - 122;
      } else {
        array[i] = asc + n;
      }
    } else {
      array[i] = asc;
    }
  }

  const result = array.map((e) => String.fromCharCode(e)).join('');

  return result;
}

// Solution 2
function solution2(s, n) {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const array = [];

  for (let i = 0; i < s.length; i++) {
    let nextIdx;

    if (lowerAlphabet.indexOf(s[i]) !== -1) {
      nextIdx = (lowerAlphabet.indexOf(s[i]) + n) % 26;
      array.push(lowerAlphabet[nextIdx]);
    }

    if (upperAlphabet.indexOf(s[i]) !== -1) {
      nextIdx = (upperAlphabet.indexOf(s[i]) + n) % 26;
      array.push(upperAlphabet[nextIdx]);
    }

    if (s[i] === ' ') {
      array.push(' ');
    }
  }

  const result = array.join('');

  return result;
}