// Solution 1
function solution(rsp) {
  const game = {
    2: 0,
    0: 5,
    5: 2,
  };

  return [...rsp].map((element) => game[element]).join('');
}
