function solution(dirs) {
  const routesSet = new Set();
  let x = 5;
  let y = 5;

  for (const order of dirs) {
    const startPoint = `${x}${y}`;

    if (order === 'U' && x - 1 >= 0) {
      --x;
    } else if (order === 'D' && x + 1 <= 10) {
      ++x;
    } else if (order === 'R' && y + 1 <= 10) {
      ++y;
    } else if (order === 'L' && y - 1 >= 0) {
      --y;
    }

    const endPoint = `${x}${y}`;

    if (
      startPoint !== endPoint &&
      !routesSet.has(startPoint + endPoint) &&
      !routesSet.has(endPoint + startPoint)
    ) {
      routesSet.add(startPoint + endPoint);
    }
  }

  return routesSet.size;
}
