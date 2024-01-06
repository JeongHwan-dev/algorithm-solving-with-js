// Solution 1
function solution(myString, pat) {
  for (let i = myString.length; i >= 0; i--) {
    const partOfString = myString.substring(0, i);

    if (partOfString.endsWith(pat)) {
      return partOfString;
    }
  }
}

// Solution 2
function solution2(myString, pat) {
  return myString.slice(0, myString.lastIndexOf(pat) + pat.length);
}
