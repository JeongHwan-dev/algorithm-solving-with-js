function solution(s, n) {
  let answer = '';
  let arr = s.split('');

  for (let i = 0; i < s.length; i++) {
    let asc = s.charCodeAt(i);

    if (asc >= 65 && asc <= 90) {
      if (asc + n > 90) {
        arr[i] = 64 + (asc + n) - 90;
      } else {
        arr[i] = asc + n;
      }
    } else if (asc >= 97 && asc <= 122) {
      if (asc + n > 122) {
        arr[i] = 96 + (asc + n) - 122;
      } else {
        arr[i] = asc + n;
      }
    } else {
      arr[i] = asc;
    }
  }

  answer = arr.map((e) => String.fromCharCode(e)).join('');

  return answer;
}

function solution2(s, n) {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let answer;
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    let nextIdx;

    if (lowerAlphabet.indexOf(s[i]) !== -1) {
      nextIdx = (lowerAlphabet.indexOf(s[i]) + n) % 26;
      console.log(nextIdx);
      arr.push(lowerAlphabet[nextIdx]);
    }

    if (upperAlphabet.indexOf(s[i]) !== -1) {
      nextIdx = (upperAlphabet.indexOf(s[i]) + n) % 26;
      console.log(nextIdx);
      arr.push(upperAlphabet[nextIdx]);
    }

    if (s[i] === ' ') {
      arr.push(' ');
    }
  }

  answer = arr.join('');

  return answer;
}
