// dayObj를 활용한 솔루션1
function solution1(a, b) {
  const dayArr = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  const dayObj = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  let days = 0;
  let idx = 0;

  for (let i = 1; i < a; i++) {
    days += dayObj[i];
  }

  days += b;
  idx = days % 7;

  return dayArr[idx];
}

// Date 객체를 활용한 솔루션2
function solution2(a, b) {
  const dayArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(`2016-${a}-${b}`);
  const day = date.getDay();

  return dayArr[day];
}
