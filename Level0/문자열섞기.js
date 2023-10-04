// Solution 1
function solution(str1, str2) {
  return [...str1].reduce((acc, cur, index) => acc + cur + str2[index], '');
}
