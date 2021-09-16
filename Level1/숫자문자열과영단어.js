// 영어가 입력되면 숫자로 리턴하는 함수
function translate(eng) {
  const number = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };

  return number[eng];
}

// 변환 함수를 이용한 솔루션1
function solution1(s) {
  let answer;
  // 문자 단위로 split 해서 배열에 넣기
  const arr = s.split('');
  // 숫자만을 담을 배열
  const arrN = [];
  // 영어 단어 변수
  let eng = '';

  // 반복문을 이용하여 단어 탐색
  for (let i = 0; i < arr.length; i++) {
    // 숫자가 아니면 옳바른 영어 단어가 나올 때까지 단어를 조합한 후
    if (isNaN(arr[i])) {
      eng = eng.concat(arr[i]);

      // 옳바른 단어가 조합되면 변환 함수를 통해 숫자로 변경하여 숫자 배열에 push
      if (translate(eng)) {
        let num = translate(eng);

        arrN.push(num);
        eng = '';
      }
    }
    // 숫자가 들어오면 숫자 배열에 push
    else {
      arrN.push(arr[i]);
    }
  }

  // 숫자 배열을 하나의 문자열로 합치고 타입을 숫자로 변경
  answer = Number(arrN.join(''));

  return answer;
}

// split(), join() 메서드들을 이용한 솔루션2
function solution2(s) {
  // 숫자 배열
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  // 숫자 배열을 돌면서 그에 해당하는 값이 있으면
  // split 시키고 idx를 join 하기
  numbers.forEach((number, idx) => {
    s = s.split(number).join(idx);
  });

  // 타입을 숫자로 변경하여 리턴
  return Number(s);
}
