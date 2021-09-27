// Solution 1
// sort() 메서드를 if 문으로 진행한 솔루션
function solution1(weights, head2head) {
  const results = head2head.map((playerMatches, playerIndex) => {
    const matches = playerMatches.split('');
    let totalMatchCount = 0;
    let winMatchCount = 0;
    let specialWinCount = 0;

    matches.forEach((match, index) => {
      if (match !== 'N') {
        totalMatchCount++;
        if (match === 'W') {
          winMatchCount++;
          if (weights[playerIndex] < weights[index]) {
            specialWinCount++;
          }
        }
      }
    });

    const winningRate =
      totalMatchCount === 0 ? 0 : (winMatchCount / totalMatchCount) * 100;
    const weight = weights[playerIndex];
    const playerNumber = playerIndex + 1;

    return [winningRate, specialWinCount, weight, playerNumber];
  });

  results.sort((a, b) => {
    if (a[0] === b[0] && a[1] === b[1] && a[2] === b[2]) {
      return a[3] - b[3];
    } else if (a[0] === b[0] && a[1] === b[1]) {
      return b[2] - a[2];
    } else if (a[0] === b[0]) {
      return b[1] - a[1];
    } else {
      return b[0] - a[0];
    }
  });

  const rank = results.map((result) => result[3]);

  return rank;
}

// Solution 2
// sort() 메서드를 논리 연산자 || 로 진행한 솔루션
function solution2(weights, head2head) {
  const results = head2head.map((playerMatches, playerIndex) => {
    const matches = playerMatches.split('');
    let totalMatchCount = 0;
    let winMatchCount = 0;
    let specialWinCount = 0;

    matches.forEach((match, index) => {
      if (match !== 'N') {
        totalMatchCount++;
        if (match === 'W') {
          winMatchCount++;
          if (weights[playerIndex] < weights[index]) {
            specialWinCount++;
          }
        }
      }
    });

    const winningRate =
      totalMatchCount === 0 ? 0 : (winMatchCount / totalMatchCount) * 100;
    const weight = weights[playerIndex];
    const playerNumber = playerIndex + 1;

    return [winningRate, specialWinCount, weight, playerNumber];
  });

  results.sort(
    (a, b) => b[0] - a[0] || b[1] - a[1] || b[2] - a[2] || a[3] - b[3]
  );

  const rank = results.map((result) => result[3]);

  return rank;
}
