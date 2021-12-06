// Solution 1
function getRank(count) {
  let rank;

  if (count === 6) {
    rank = 1;
  } else if (count === 5) {
    rank = 2;
  } else if (count === 4) {
    rank = 3;
  } else if (count === 3) {
    rank = 4;
  } else if (count === 2) {
    rank = 5;
  } else {
    rank = 6;
  }

  return rank;
}

function solution1(lottos, win_nums) {
  const noZeroLottos = lottos.filter((num) => num !== 0);
  const sameCnt = noZeroLottos.filter((num) => win_nums.includes(num)).length;
  const zeroCnt = lottos.length - noZeroLottos.length;
  const result = [getRank(sameCnt + zeroCnt), getRank(sameCnt)];

  return result;
}

// Solution 2
function solution2(lottos, win_nums) {
  const result = [];
  const min = lottos.filter((n) => win_nums.includes(n)).length;
  const max = lottos.filter((n) => n === 0).length + min;

  max > 1 ? result.push(7 - max) : result.push(6);
  min > 1 ? result.push(7 - min) : result.push(6);

  return result;
}

// Solution 3
function getRank(matchingNumberCount) {
  let rank;

  switch (matchingNumberCount) {
    case 6:
      rank = 1;
      break;
    case 5:
      rank = 2;
      break;
    case 4:
      rank = 3;
      break;
    case 3:
      rank = 4;
      break;
    case 2:
      rank = 5;
      break;
    default:
      rank = 6;
      break;
  }

  return rank;
}

function solution3(lottos, win_nums) {
  const matchingNumberCount = lottos.filter((number) =>
    win_nums.includes(number)
  ).length;
  const zeroCount = lottos.filter((number) => number === 0).length;
  const result = [
    getRank(matchingNumberCount + zeroCount),
    getRank(matchingNumberCount),
  ];

  return result;
}
