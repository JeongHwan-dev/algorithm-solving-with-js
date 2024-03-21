// Solution 1
function solution(my_string, s, e) {
  const myCharList = my_string.split('');
  const partOfCharList = my_string
    .slice(s, e + 1)
    .split('')
    .reverse();

  partOfCharList.forEach((char, index) => (myCharList[s + index] = char));

  return myCharList.join('');
}
