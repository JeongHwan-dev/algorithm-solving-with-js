// Solution 1
function solution(my_string, overwrite_string, s) {
  const stringArray = [...my_string];

  for (let i = 0; i < overwrite_string.length; i++) {
    stringArray[s + i] = overwrite_string[i];
  }

  return stringArray.join('');
}
