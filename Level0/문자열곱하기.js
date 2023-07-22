// Solution 1
function solution1(my_string, k) {
  return Array.from({ length: k }, () => my_string).join('');
}

// Solution 2
function solution2(my_string, k) {
  return my_string.repeat(k);
}
