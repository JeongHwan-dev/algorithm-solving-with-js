// Solution 1
function solution1(my_string) {
  return my_string.split('').reverse().join('');
}

// Solution 2
function solution2(my_string) {
  return [...my_string].reverse().join('');
}

// Solution 3
function solution3(my_string) {
  return Array.from(my_string).reverse().join('');
}
