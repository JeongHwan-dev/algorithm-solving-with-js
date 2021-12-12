// Solution 1
function solution1(d, budget) {
  const _d = d.slice();
  let totalCost = 0;
  let i;

  _d.sort((a, b) => a - b);

  for (i = 0; i < d.length; i++) {
    totalCost += _d[i];

    if (totalCost > budget) {
      break;
    }
  }

  return i;
}

// Solution 2
function solution2(d, budget) {
  const _d = d.slice();
  let totalCost = 0;
  let maxDepartmentCount = 0;

  _d.sort((a, b) => a - b).forEach((cost) => {
    totalCost += cost;

    if (totalCost <= budget) {
      maxDepartmentCount++;
    }
  });

  return maxDepartmentCount;
}

// Solution 3
function solution3(d, budget) {
  const _d = d.slice();
  let totalCost = 0;
  let maxDepartmentCount = 0;

  _d.sort((a, b) => a - b);

  for (const cost of _d) {
    totalCost += cost;

    if (totalCost <= budget) {
      maxDepartmentCount++;
    } else {
      break;
    }
  }

  return maxDepartmentCount;
}
