// Solution 1
// sort() 메서드를 사용한 솔루션
function solution1(d, budget) {
  const _d = d.slice();
  let sum = 0;
  let i;

  _d.sort((a, b) => a - b);

  for (i = 0; i < d.length; i++) {
    sum += _d[i];

    if (sum > budget) {
      break;
    }
  }

  return i;
}

// Solution 2
// sort() 메서드와 forEach() 메서드를 사용한 솔루션
function solution2(d, budget) {
  const _d = d.slice();
  let sum = 0;
  let count = 0;

  _d.sort((a, b) => a - b).forEach((cost) => {
    sum += cost;

    if (sum <= budget) {
      count++;
    }
  });

  return count;
}
