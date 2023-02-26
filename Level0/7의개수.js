const LUCKY_NUMBER = 7;

function solution(array) {
  return array
    .join()
    .split('')
    .filter((num) => Number(num) === LUCKY_NUMBER).length;
}
