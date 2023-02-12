// Solution 1
function solution1(my_string) {
  return [...my_string].filter((str, index) => !my_string.slice(0, index).includes(str)).join('');
}

// Solution 2
function solution2(my_string) {
  return [...new Set(my_string)].join('');
}

// Solution 3
function solution3(my_string) {
  return [...my_string].filter((str, index) => my_string.indexOf(str) === index).join('');
}
