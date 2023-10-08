// Solution 1
function solution(strArr) {
  const FORBIDDEN_STRING = 'ad';

  return strArr.filter((str) => !str.includes(FORBIDDEN_STRING));
}
