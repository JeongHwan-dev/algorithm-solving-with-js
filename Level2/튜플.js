// Solution 1
// 정규표현식을 사용한 솔루션
function solution1(s) {
  const tuple = [];
  const set = new Set();
  const regex = /[^0-9]/g;
  const filteredS = s
    .split('},')
    .map((e) => e.split(',').map((n) => Number(n.replace(regex, ''))))
    .sort((a, b) => a.length - b.length);

  filteredS.forEach((e) => {
    e.forEach((num) => {
      set.add(num);
    });
  });

  tuple.push(...Array.from(set));

  return tuple;
}

// Solution 2
// slice() 메서드를 사용한 솔루션
function solution2(s) {
  const tuple = [];
  const set = new Set();
  const filteredS = s
    .slice(2, -2)
    .split('},{')
    .map((e) => e.split(',').map((num) => Number(num)))
    .sort((a, b) => a.length - b.length);

  filteredS.forEach((e) => {
    e.forEach((num) => {
      set.add(num);
    });
  });

  tuple.push(...Array.from(set));

  return tuple;
}
