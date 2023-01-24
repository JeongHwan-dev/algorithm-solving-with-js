// Solution 1
function solution(array, height) {
  return array.filter((heightInArray) => heightInArray > height).length;
}
