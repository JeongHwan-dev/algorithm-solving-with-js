// Solution 1
function solution1(my_string, n) {
  return my_string
    .split('')
    .reduce((acc, cur) => [...acc, ...Array.from({ length: n }, () => cur)], [])
    .join('');
}

// Solution 2
function solution2(my_string, n) {
  return [...my_string]
    .reduce((acc, cur) => [...acc, ...Array.from({ length: n }, () => cur)], [])
    .join('');
}

// Solution 3
function solution3(my_string, n) {
  return [...my_string].map((alphabet) => alphabet.repeat(n)).join('');
}
