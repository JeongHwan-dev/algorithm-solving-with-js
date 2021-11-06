function checkStones(stones, mid, k) {
  let result = true;
  let jumpDistance = 0;

  for (let i = 0; i < stones.length; i++) {
    if (stones[i] < mid) {
      jumpDistance += 1;
    } else {
      jumpDistance = 0;
    }

    if (jumpDistance >= k) {
      result = false;
      break;
    }
  }

  return result;
}

function solution(stones, k) {
  let leftPoint = 1;
  let rightPoint = 200000000;

  while (leftPoint < rightPoint - 1) {
    const mid = parseInt((leftPoint + rightPoint) / 2);

    if (checkStones(stones, mid, k)) {
      leftPoint = mid;
    } else {
      rightPoint = mid;
    }
  }

  return leftPoint;
}
