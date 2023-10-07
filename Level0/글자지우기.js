// Solution 1
function solution(my_string, indices) {
  const myStringArray = [...my_string];

  indices.forEach((index) => (myStringArray[index] = ''));

  return myStringArray.join('');
}
