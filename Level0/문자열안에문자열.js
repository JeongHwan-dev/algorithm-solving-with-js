// Solution 1
function solution1(str1, str2) {
  return str1.length === str1.replace(str2, '').length ? 2 : 1;
}

// Solution 2
function solution2(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}
