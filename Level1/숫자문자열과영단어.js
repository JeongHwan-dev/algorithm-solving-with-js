// Solution 1
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

function solution1(s) {
  let convertedS;
  const arr = s.split('');
  const arrN = [];
  let eng = '';

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      eng = eng.concat(arr[i]);

      if (translate(eng)) {
        const num = translate(eng);

        arrN.push(num);
        eng = '';
      }
    } else {
      arrN.push(arr[i]);
    }
  }

  convertedS = Number(arrN.join(''));

  return convertedS;
}

// Solution 2
function solution2(s) {
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

  numbers.forEach((number, idx) => {
    s = s.split(number).join(idx);
  });

  return Number(s);
}

// Solution 3
function solution3(s) {
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
  let convertedS = s;

  numbers.forEach((number, index) => {
    convertedS = convertedS.split(number).join(index);
  });

  convertedS = parseInt(convertedS);

  return convertedS;
}

// Solution 4
function solution4(s) {
  const convertedS = parseInt(
    s
      .replace(/zero/g, 0)
      .replace(/one/g, 1)
      .replace(/two/g, 2)
      .replace(/three/g, 3)
      .replace(/four/g, 4)
      .replace(/five/g, 5)
      .replace(/six/g, 6)
      .replace(/seven/g, 7)
      .replace(/eight/g, 8)
      .replace(/nine/g, 9)
  );

  return convertedS;
}
