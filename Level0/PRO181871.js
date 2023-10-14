// Solution 1
function solution(myString, pat) {
  let patCount = 0;

  for (let i = 0; i < myString.length - pat.length + 1; i++) {
    if (myString.substring(i, i + pat.length) === pat) {
      patCount += 1;
    }
  }

  return patCount;
}
