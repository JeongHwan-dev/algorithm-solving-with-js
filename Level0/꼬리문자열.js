// Solution 1
function solution(str_list, ex) {
  return str_list.filter((str) => !str.includes(ex)).join('');
}
