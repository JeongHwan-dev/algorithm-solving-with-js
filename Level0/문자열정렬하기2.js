// Solution 1
function solution1(my_string) {
  return [...my_string]
    .map((str) => str.toLowerCase())
    .sort()
    .join('');
}

// Solution 2
function solution2(my_string) {
  return my_string.toLowerCase().split('').sort().join('');
}
