// Solution 1
function solution1(s1, s2) {
  return s1.reduce((acc, cur) => (s2.includes(cur) ? acc + 1 : acc), 0);
}

// Solution 2
function solution2(s1, s2) {
  return s1.filter((str) => s2.includes(str)).length;
}
