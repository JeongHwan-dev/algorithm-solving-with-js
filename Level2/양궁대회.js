// Solution 1
function solution(n, info) {
  let maxDifference = 0;
  let ryonScoreList = Array.from({ length: 11 }, () => 0);

  function shot(peachScore, ryonScore, count, index, board) {
    if (n < count) {
      return;
    }

    if (index > 10) {
      const difference = ryonScore - peachScore;

      if (difference > maxDifference) {
        board[10] = n - count;
        maxDifference = difference;
        ryonScoreList = board;
      }

      return;
    }

    if (n > count) {
      let subBoard = [...board];

      subBoard[10 - index] = info[10 - index] + 1;
      shot(
        peachScore,
        ryonScore + index,
        count + info[10 - index] + 1,
        index + 1,
        subBoard
      );
    }

    if (info[10 - index] > 0) {
      shot(peachScore + index, ryonScore, count, index + 1, board);
    } else {
      shot(peachScore, ryonScore, count, index + 1, board);
    }
  }

  shot(0, 0, 0, 0, ryonScoreList);

  return maxDifference <= 0 ? [-1] : ryonScoreList;
}
