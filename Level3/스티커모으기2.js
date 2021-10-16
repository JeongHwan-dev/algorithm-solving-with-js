function solution(sticker) {
  const len = sticker.length + 2;
  const dp1 = new Array(len).fill(0);
  const dp2 = new Array(len).fill(0);

  if (sticker.length === 1) {
    return sticker[0];
  }

  for (let i = 2; i < len - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i - 2]);
  }

  for (let i = 3; i < len; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i - 2]);
  }

  const maxSum = Math.max(dp1[len - 2], dp2[len - 1]);

  return maxSum;
}

console.log(solution([14, 6, 5, 11, 3, 9, 2, 10]));
