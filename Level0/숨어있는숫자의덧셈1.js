// Solution 1
function solution1(my_string) {
  return [...my_string].filter((str) => !isNaN(str)).reduce((acc, cur) => acc + Number(cur), 0);
}
