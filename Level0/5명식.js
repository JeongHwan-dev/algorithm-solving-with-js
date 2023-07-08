// Solution 1
const MAX_NUMBER_OF_PASSENGERS = 5;

function solution(names) {
  return names.filter((_, index) => index % MAX_NUMBER_OF_PASSENGERS == 0);
}
