function solution1(phone_number) {
  let answer = '';
  let len = phone_number.length;
  let lastFourNumber = phone_number.substr(len - 4, 4);

  for (let i = 0; i < len - 4; i++) {
    answer += '*';
  }

  answer += lastFourNumber;

  return answer;
}

function solution2(phone_number) {
  let answer = phone_number
    .split('')
    .map((num, idx) => {
      if (idx < phone_number.length - 4) {
        return '*';
      }
      return num;
    })
    .join('');

  return answer;
}
