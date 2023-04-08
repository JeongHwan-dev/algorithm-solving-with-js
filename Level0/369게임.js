const GAME_NUMBER_LIST = [3, 6, 9];

function solution(order) {
  return order
    .toString()
    .split('')
    .filter((num) => GAME_NUMBER_LIST.includes(Number(num))).length;
}
