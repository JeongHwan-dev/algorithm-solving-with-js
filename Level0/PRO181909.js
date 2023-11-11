// Solution 1
function solution(myString) {
  const suffixList = [];

  for (let i = 0; i < myString.length; i++) {
    suffixList.push(myString.slice(i));
  }

  return suffixList.sort();
}
