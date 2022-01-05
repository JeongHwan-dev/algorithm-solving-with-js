// Solution 1
function minimumDistances(a) {
  const _a = a.slice();
  const aSet = new Set(_a);
  const distanceArray = [];

  for (const num of aSet) {
    const firstIndex = _a.indexOf(num);
    const secondIndex = _a.indexOf(num, firstIndex + 1);

    if (secondIndex !== -1) {
      const distance = Math.abs(firstIndex - secondIndex);

      distanceArray.push(distance);
    }
  }

  if (distanceArray.length === 0) {
    return -1;
  }

  const minDistance = Math.min(...distanceArray);

  return minDistance;
}
