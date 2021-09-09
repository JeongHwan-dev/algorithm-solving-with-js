function solution1(s) {
  let answer;
  const arr = s.split(' ');

  answer = arr
    .map((word) => {
      let tmp = word.split('');

      for (let i = 0; i < tmp.length; i++) {
        if (i % 2 === 0) {
          tmp[i] = tmp[i].toUpperCase();
        } else {
          tmp[i] = tmp[i].toLowerCase();
        }
      }

      return tmp.join('');
    })
    .join(' ');

  return answer;
}

function solution2(s) {
  let answer;
  const arr = s.split(' ');

  answer = arr
    .map((word) => {
      let tmp = word.split('');

      for (let i = 0; i < tmp.length; i++) {
        tmp[i] = i % 2 === 0 ? tmp[i].toUpperCase() : tmp[i].toLowerCase();
      }

      return tmp.join('');
    })
    .join(' ');

  return answer;
}
