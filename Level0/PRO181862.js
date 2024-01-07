// Solution 1
function solution(myStr) {
  const result = myStr.split(/[a|b|c]/g).filter((str) => str !== '');

  return result.length > 0 ? result : ['EMPTY'];
}
